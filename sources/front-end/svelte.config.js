import adapterNode from '@sveltejs/adapter-node';
// import {
//   VitePWA,
// } from 'vite-plugin-pwa';

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
    files: {
      serviceWorker: 'src/service-worker/index.js',
    },
    serviceWorker: {
      files: (filepath) => !/\.DS_STORE/.test(filepath),
    },
  },
};

export default config;
