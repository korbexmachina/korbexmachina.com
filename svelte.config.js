import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/kit/vite';
// ! DO NOT UNCOMMENT OR REMOVE
// import { base } from '$app/paths';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors

	extensions: ['.svelte', '.md', '.svx'],
    preprocess: [
		vitePreprocess(),
        mdsvex({
            extensions: ['.md', '.svx'],
        })
    ],

	// ! DO NOT CHANGE
	kit: {
		adapter: adapter(),
		paths: {
			base: '/korbexmachina.com'
		}
	}
};

export default config;
