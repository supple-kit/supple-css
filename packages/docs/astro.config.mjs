import starlight from "@astrojs/starlight";
import { defineConfig, passthroughImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
	image: {
		service: passthroughImageService(),
	},
	integrations: [
		starlight({
			title: "My Docs",
			social: {
				github: "https://github.com/withastro/starlight",
			},
			sidebar: [
				{
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Example Guide", slug: "guides/example" },
					],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
		}),
	],
});
