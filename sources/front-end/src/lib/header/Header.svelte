<script>
  import { page } from '$app/stores';
  // import logo from './svelte-logo.svg';
</script>

<style>
  header {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    position: sticky;
    top: 0;
    padding: 0 6rem;
    contain: var(--contain);
  }

  nav {
    display: flex;
    justify-content: center;
    /* --background: rgba(255, 255, 255, 0.7); */
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    /* height: 3em; */
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  ul > li {
    position: relative;
    height: 6rem;
    min-width: 9rem;
  }

  /* ul > li.active::before {
    --size: 6px;
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--accent-color);
  } */

  ul > li > a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0;
    color: var(--heading-color);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;

    font-size: 1.5rem;
    pointer-events: all;
  }


  ul > li > a:hover {
    color: var(--accent-color);
  }
</style>

<header>
  <nav>
    <ul>
      <!-- <li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li> -->
      <!-- <li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">about</a></li> -->
      <li class:active={$page.path === '/search'}><a sveltekit:prefetch href="/search">search</a></li>
      <li class:active={$page.path === '/profile'}><a sveltekit:prefetch href="/profile">profile</a></li>
      <li class:active={$page.path === '/basket'}><a sveltekit:prefetch href="/basket">basket</a></li>
    </ul>
  </nav>
</header>

