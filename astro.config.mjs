// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Astro config docs https://astro.build/config
export default defineConfig({
	// required to publish on GH Pages
	site: 'https://siqjulia.github.io',
	base: '/dig345-devlog',
	integrations: [
		// Startlight-specific config
		starlight({
			title: 'Julia\'s DevLog',

			sidebar: [
				{ label: 'Schedule', autogenerate: { directory: 'schedule' }, },
		
			],
			customCss: [
				'./src/styles/custom.css', // relative path to custom CSS file
			],
		}),
	],
});
