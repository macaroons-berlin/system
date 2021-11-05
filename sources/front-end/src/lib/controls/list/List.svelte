<script>
  export let id;
  export let caption;
  export let isInline = false;
</script>

<style>
  label {
    margin-bottom: 1.5rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .isInline {
    display: flex;
  }
  
  ul > :global(li > a) {
    padding: 0.75rem 0;
  }
  
  ul:not(.isInline) > :global(li:not(:first-of-type)) {
    margin-top: 0.5rem;
  }

  ul.isInline > :global(li:not(:last-of-type)) {
    margin-right: 0.5rem;
  }

  /* ul > li > a {
    text-decoration: none;
    text-transform: capitalize;
    letter-spacing: 0.1em;
    color: var(--text-color);
  } */
</style>

<label for={id} class='nav-text'>{caption}</label>
<ul {id} class='list' class:isInline>
  <slot />
</ul>