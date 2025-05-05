import StyleDictionary from "style-dictionary";
import { createSuppleFormat } from "./utils/formatter.mjs";

// Register the filtered format
StyleDictionary.registerFormat(createSuppleFormat());

const suppleCSSDictionary = new StyleDictionary({
	source: ["src/tokens/**/*.tokens"],
	platforms: {
		css: {
			transformGroup: "css",
			buildPath: "./src/",
			files: [
				{
					destination: "theme/theme.css",
					format: "css/variables/supple",
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
