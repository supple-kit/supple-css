# @supple-kit/style-dictionary-css

A Style Dictionary formatter for Supple CSS that provides smart token handling and optimized CSS output.

## Features

- Handles core tokens and semantic tokens as per: https://www.alwaystwisted.com/articles/a-design-tokens-workflow-part-6
- Converts color tokens to HSL format
- Only includes core tokens that are actually referenced
- Maintains semantic relationships in the CSS

## Installation

```bash
npm install @supple-kit/style-dictionary-css
```

## Usage

```js
import { createSuppleFormat } from "@supple-kit/style-dictionary-css";
import StyleDictionary from "style-dictionary";

// Register the supple format
StyleDictionary.registerFormat(createSuppleFormat());

// Use it in your configuration
const config = {
	source: ["tokens/**/*.tokens"],
	platforms: {
		css: {
			transformGroup: "css",
			buildPath: "src/",
			files: [{
				destination: "tokens.css",
				format: "css/variables/supple",
				options: {
					selector: "@theme" // Optional, defaults to :root
				}
			}]
		}
	}
};

const sd = new StyleDictionary(config);
sd.buildAllPlatforms();
```

## Token Structure

The formatter expects tokens to be organized in a specific way:

```
tokens/
  core/          # Core design tokens (colors, spacing, etc.)
    color.tokens
    spacing.tokens
  semantic/      # Semantic tokens that reference core tokens
    color.tokens
    spacing.tokens
```

Semantic tokens can reference core tokens or other semantic tokens:

```json
{
	"color": {
		"primary": {
			"$value": "{color.red.600}",
			"$type": "color"
		},
		"primary-reference": {
			"$value": "{color.primary}",
			"$type": "color"
		}
	}
}
```

## Output

The formatter will generate optimized CSS like this:

```css
@theme {
	--color-red-600: hsl(0, 100%, 50%);
	--color-primary: var(--color-red-600);
	--color-primary-reference: var(--color-primary);
}
```

## License

MIT
