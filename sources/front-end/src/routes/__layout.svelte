<script>
  import {
    onMount,
    onDestroy,
  } from 'svelte';
  import {
    isBrowserSupported,
  } from '$lib/helpers/isBrowserSupported.mjs';
  import {
    Ldr,
  } from '$lib/ldr/ldr.mjs';
  import NavSideBar from '$lib/nav-sidebar/NavSideBar.svelte';
  import Header from '$lib/header/Header.svelte';
  import Footer from '$lib/footer/Footer.svelte';
  import UnsupportedBrowser from '$lib/unsupported-browser/UnsupportedBrowser.svelte';
  import '../app.css';

  let ldr;

  onMount(async () => {
    ldr = new Ldr();

    await ldr.start();

    console.log('__layout.svelte:onMount');
  });

  onDestroy(async () => {
    if (typeof ldr !== 'undefined') {
      await ldr.stop();
  
      ldr = null;
    }

    console.log('__layout.svelte:onDestroy');
  });
</script>

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .checking-your-browser {
    position: absolute;
    top: calc(100vh / 2 - 400px / 2);
    display: flex;
    align-self: center;
    justify-self: center;
    justify-content: center;
    align-items: center;

    width: 800px;
    height: 400px;
    background-color: brown;
  }
</style>


{#await isBrowserSupported}
  <div class='checking-your-browser'>checking your browser</div>
{:then value} 
  {#if value === true}
    <Header />
    <NavSideBar />

    <main>
      <slot />
    </main>

    <Footer />
  {:else}
    <UnsupportedBrowser />  
  {/if}
{/await}


