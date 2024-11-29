import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://biblioverse.github.io',
	base: 'biblioteca-doc',
	integrations: [
		starlight({
			title: 'Biblioteca',
			social: {
				github: 'https://github.com/biblioverse/biblioteca',
			},
			lastUpdated: true,

			sidebar: [
				{ label: 'Home', link: '/' },
				{ label: 'Important concepts', link: '/concepts' },
				{
					label: 'Installation',
					autogenerate: { directory: 'installing' },
				},
				{
					label: 'User accounts',
					autogenerate: { directory: 'account' },
				},
				{
					label: 'Managing your books',
					autogenerate: { directory: 'managing_books' },
				},
			],
		}),
	],
});
