<script>
  import { page } from '$app/stores';
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
  }

  ul > li:not(:first-of-type) {
    margin-left: 1rem;
  }


  ul > li > a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0;
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
      <li class:active={$page.path === '/search'}><a sveltekit:prefetch href="/search" class="nav-text">search</a></li>
      <li class:active={$page.path === '/profile'}><a sveltekit:prefetch href="/profile" class="nav-text">profile</a></li>
      <li class:active={$page.path === '/basket'}><a sveltekit:prefetch href="/basket" class="nav-text">basket</a></li>
    </ul>
  </nav>
</header>

