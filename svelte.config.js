import adapter from '@sveltejs/adapter-static';
import path from 'path';
import { fileURLToPath } from 'url';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/kit/vite';

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
		alias: {
			$lib: 'lib'
		}
	}
};

export default config;
