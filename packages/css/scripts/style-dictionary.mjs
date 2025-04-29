import StyleDictionary from "style-dictionary";

const suppleCSSDictionary = new StyleDictionary({
	source: ["src/tokens/**/*.tokens"],
	platforms: {
		css: {
			transformGroup: "css",
			buildPath: "./src/theme/",
			files: [
				// {
				// 	destination: "core.tokens.css",
				// 	format: "css/variables",
				// 	filter: token => token.filePath.includes("core"),
				// 	options: {
				// 		selector: "@theme",
				// 	},
				// },
				{
					destination: "theme.css",
					format: "css/variables",
					// filter: token => token.filePath.includes("semantic"),
					options: {
						outputReferences: true,
						selector: "@theme",
					},
				},
			],
		},
	},
});

suppleCSSDictionary.buildAllPlatforms();
console.log("Build completed!");
