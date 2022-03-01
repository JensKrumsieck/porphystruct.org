import adapter from '@sveltejs/adapter-vercel';
import { imagetools } from 'vite-imagetools';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		vite: {
			define: {
				'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
			},
			plugins: [imagetools({ force: true })],
			build: {
				rollupOptions: {
					output: {
						manualChunks: undefined
					}
				}
			},
			server: {
				fs: {
					strict: false
				}
			}
		}
	}
};

export default config;
