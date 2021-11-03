/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		format: 'esm',
		hydratable: true,
	},
	extensions: [ '.svelte' ],
	kit: {
		// hydrate the <div id="macaroons-berlin"> element in src/app.html
		target: '#macaroons-berlin',
		hydrate: true,
		router: true,
		ssr: true,
	}
};

export default config;
