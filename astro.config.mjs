import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://biblioverse.github.io',
	base: import.meta.env.PROD?'biblioteca-doc':'',

	integrations: [
		starlight({
			title: 'Biblioteca Docs',
			social: {
				github: 'https://github.com/biblioverse/biblioteca',
			},
			editLink: {
				baseUrl: 'https://github.com/biblioverse/biblioteca-doc/edit/main/',
			},
			lastUpdated: true,
			customCss: [
				// Relative path to your custom CSS file
				'./src/custom.css',
			],
			sidebar: [
				{ label: 'Home', link: '/' },
				{ label: 'Demo', link: '/demo' },
				{
					label: 'Installation',
					autogenerate: { directory: 'installing' },
				},
				{
					label: 'User Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Troubleshooting',
					autogenerate: { directory: 'Troubleshooting' },
				},
			],
		}),
	],
});
