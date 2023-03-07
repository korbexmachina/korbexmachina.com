import adapter from '@sveltejs/adapter-auto';
import path from 'path';
import { fileURLToPath } from 'url';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../')

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},

	plugins: [
		svelte({
			// tell svelte to handle mdsvex files
			extensions: [".svelte", ".svx"],
			preprocess: mdsvex()
		})
	]
};

export default config;
