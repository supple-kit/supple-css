import { hexToHSL } from "./color.mjs";

function resolveTokenReference(dictionary, refPath) {
	const token = dictionary.allTokens.find(t => t.path.join(".") === refPath);
	if (!token)
		return null;

	// If this token references another token, recursively resolve it
	if (token.original.$value && typeof token.original.$value === "string" && token.original.$value.startsWith("{")) {
		const nextRefPath = token.original.$value.replace(/[{}]/g, "");
		return resolveTokenReference(dictionary, nextRefPath);
	}

	return token;
}

function collectReferencedTokens(dictionary) {
	const referenceCount = new Map();

	dictionary.allTokens
		.filter(token => token.filePath.includes("/semantic/"))
		.forEach((token) => {
			if (token.original.$value && typeof token.original.$value === "string" && token.original.$value.startsWith("{")) {
				// Get the immediate reference
				const refPath = token.original.$value.replace(/[{}]/g, "");
				referenceCount.set(refPath, (referenceCount.get(refPath) || 0) + 1);

				// If this reference points to a semantic token, resolve it to find core token references
				const referencedToken = dictionary.allTokens.find(t => t.path.join(".") === refPath);
				if (referencedToken && referencedToken.filePath.includes("/semantic/")) {
					const resolvedToken = resolveTokenReference(dictionary, refPath);
					if (resolvedToken && resolvedToken.filePath.includes("/core/")) {
						const corePath = resolvedToken.path.join(".");
						referenceCount.set(corePath, (referenceCount.get(corePath) || 0) + 1);
					}
				}
			}
		});

	return referenceCount;
}

export function createSuppleFormat() {
	return {
		name: "css/variables/supple",
		format({ dictionary, options }) {
			const referenceCount = collectReferencedTokens(dictionary);
			const selector = options.selector ? `${options.selector}` : ":root";

			// First, get all core tokens that are referenced
			const referencedCorePaths = new Set(Array.from(referenceCount.keys()));

			// Filter tokens: include all semantic tokens and only referenced core tokens
			const filteredTokens = dictionary.allTokens.filter((token) => {
				if (token.filePath.includes("/semantic/")) {
					return true;
				}
				return token.filePath.includes("/core/") && referencedCorePaths.has(token.path.join("."));
			});

			// Sort tokens to ensure core tokens come before semantic tokens
			filteredTokens.sort((a, b) => {
				const aIsSemantic = a.filePath.includes("/semantic/");
				const bIsSemantic = b.filePath.includes("/semantic/");
				if (aIsSemantic === bIsSemantic)
					return 0;
				return aIsSemantic ? 1 : -1;
			});

			return `${selector} {
${filteredTokens
	.map((token) => {
		// For semantic tokens referencing core tokens
		if (token.original && token.original.$value && token.original.$value.startsWith("{")) {
			const refPath = token.original.$value.replace(/[{}]/g, "");
			const refCount = referenceCount.get(refPath) || 0;

			// If the referenced token is used multiple times, use var()
			if (refCount >= 2) {
				const refName = refPath.replace(/\./g, "-");
				return `  --${token.name}: var(--${refName});`;
			}
			else {
				// Check if we're referencing a semantic token
				const referencedToken = dictionary.allTokens.find(t => t.path.join(".") === refPath);
				if (referencedToken && referencedToken.filePath.includes("/semantic/")) {
					// Use var() for semantic token references
					return `  --${token.name}: var(--${refPath.replace(/\./g, "-")});`;
				}
				// Otherwise, resolve the reference chain to get the final value
				const resolvedToken = resolveTokenReference(dictionary, refPath);
				if (resolvedToken) {
					if (resolvedToken.original.$type === "color") {
						return `  --${token.name}: ${hexToHSL(resolvedToken.original.$value)};`;
					}
					else {
						return `  --${token.name}: ${resolvedToken.original.$value};`;
					}
				}
			}
		}

		// For core tokens
		if (token.filePath.includes("/core/")) {
			const tokenPath = token.path.join(".");
			const refCount = referenceCount.get(tokenPath) || 0;

			// Only output the core token if it's referenced multiple times
			if (refCount >= 2) {
				if (token.original.$type === "color") {
					return `  --${token.name}: ${hexToHSL(token.original.$value)};`;
				}
				else {
					return `  --${token.name}: ${token.original.$value};`;
				}
			}
			else {
				return null; // Skip this token
			}
		}

		// Handle any other values
		return `  --${token.name}: ${token.value};`;
	})
	.filter(Boolean)
	.join("\n")}\n}\n`;
		},
	};
}
