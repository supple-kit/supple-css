import antfu from "@antfu/eslint-config";

export default antfu({
	formatters: true,
	astro: true,
	stylistic: {
		indent: "tab",
		semi: true,
		quotes: "double",
		jsx: true,
	},
});
