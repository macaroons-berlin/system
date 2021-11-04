<script>
  import Header from '$lib/header/Header.svelte';
  import Footer from '$lib/footer/Footer.svelte';
  import '../app.css';
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

  @media (min-width: 480px) {
    footer {
      padding: 40px 0;
    }
  }
</style>

<Header />

<main>
  <slot />
</main>

<Footer />

