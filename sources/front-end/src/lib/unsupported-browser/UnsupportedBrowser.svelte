<script>
  import ChromeLogo from './logos/chrome.svelte';
</script>
<style>
  .supported-browsers {
    position: relative;
    top: calc(100vh / 2 - 400px / 2);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    color: hsl(0, 0%, 0%);

    padding: 2rem;

    align-self: center;

    width: 50%;
    height: 400px;
    background-color: hsl(199deg 34% 57%);
  }

  label {
    display: flex;
    flex: 1 0 auto;
    align-items: center;
    justify-content: center;
  }

  ul {
    display: flex;
    flex: 2 0 auto;
    list-style-type: none;
    align-items: center;
    justify-content: space-evenly;
  }

  ul > :global(svg) {
    height: 100%;
  }
</style>

<div class='supported-browsers'>
  <label for='supported-browsers' class='nav-text'>
    please install more secure and up to date browsers
  </label>
  <ul id='supported-browsers'>
    <li>
      <a rel='noreferrer' href='https://www.google.com/chrome/' target='_blank' class='browser-info'>
        <img
          src="https://www.google.com/chrome/static/images/chrome-logo.svg"
          role="img"
          alt="Google Chrome logo. Chrome is a fast, secure, free web browser."
        >
      </a>
    </li>
    <li>
      <a rel='noreferrer' href='https://www.mozilla.org/en-US/firefox/new/' target='_blank' class='browser-info'>
        <img
          src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo-word-hor.7ff44b5b4194.svg"
          class="chr-homepage-hero__logo"
          role="img"
          alt="Firefox logo. Firefox is a fast, secure, free web browser."
        >
      </a>
    </li>
  </ul>
</div>