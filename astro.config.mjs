import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://biblioverse.github.io',
	base: import.meta.env.PROD?'biblioteca-doc':'',

	integrations: [
		starlight({
			title: 'Deprecated Biblioteca Docs',
			description: 'Documentation for Biblioteca, a modern, open-source, and privacy-focused eBook reader.',
			social: {
				github: 'https://github.com/biblioverse/biblioteca',
			},
			editLink: {
				baseUrl: 'https://github.com/biblioverse/biblioteca/edit/main/',
			},
			lastUpdated: true,
			customCss: [
				// Relative path to your custom CSS file
				'./src/custom.css',
			],
			sidebar: [
				{ label: 'Home', link: '/' },
			],
		}),
	],
});
