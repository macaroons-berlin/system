import adapterNode from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		format: 'esm',
		hydratable: true,
	},
	extensions: [ '.svelte' ],
	kit: {
		adapter: adapterNode({
			precompress: true,
		}),
		// hydrate the <div id="macaroons-berlin"> element in src/app.html
		target: '#macaroons-berlin',
		hydrate: true,
		router: true,
		ssr: true,
	}
};

export default config;
