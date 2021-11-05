<script>
  import Newsletter from '$lib/controls/newsletter/Newsletter.svelte';
  import List from '$lib/controls/list/List.svelte';
</script>

<style>
  footer {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 0.125fr auto 1fr auto 0.125fr;
    grid-template-areas:
      '. . . . .'
      '. newsletter newsletter newsletter .'
      '. help company follow-us .'
      '. legal legal legal .'
      '. . . . .';
    row-gap: 2rem;
    column-gap: 1.5rem;
  }

  .newsletter,
  .help,
  .company,
  .follow-us {
    display: flex;
    flex-direction: column;
  }

  .newsletter,
  .help,
  .company,
  .follow-us,
  .legal a {
    text-decoration: none;
    text-transform: capitalize;
    letter-spacing: 0.1em;
    color: var(--text-color);
  }

  .newsletter {
    grid-area: newsletter;
  }

  .help {
    grid-area: help;
  }

  .company {
    grid-area: company;
  }

  .follow-us {
    grid-area: follow-us;
  }

  .legal {
    grid-area: legal;
  }
</style>

<footer>
  <div class='newsletter'><Newsletter /></div>
  <div class='help'>
    <List id='help-list' caption='help'>
      <li>
        <a href='/help/faq'>frequently asked questions</a>
      </li>
      <li>
        <a href='/help/how-to-purchase'>how to purchase</a>
      </li>
      <li>
        <a href='/help/transport-and-delivery'>transport and delivery</a>
      </li>
      <li>
        <a href='/help/payments'>payments</a>
      </li>
      <li>
        <a href='/help/contact'>contact</a>
      </li>
    </List>
  </div>
  <div class='company'>
    <List id='company-list' caption='company'>
      <li>
        <a href='/company/services'>services</a>
      </li>
      <li>
        <a href='/company/history-of-the-brand'>history of the brand</a>
      </li>
    </List>
  </div>
  <div class='follow-us'>
    <List id='follow-us-list' caption='follow us'>
      <li>
        <a href='https://www.facebook.com/groups/235721428293809' target='_blank'>facebook</a>
      </li>
      <li>
        <a href='https://www.instagram.com/macarons_berlin/' target='_blank'>instagram</a>
      </li>
    </List>
  </div>
  <div class='legal'>
    <List id='legal-list' isInline={true} caption='legal'>
      <li>
        <a href='/legal/gdpr'>GDPR</a>
      </li>
      <li>
        <a href='/legal/imprint'>imprint</a>
      </li>
    </List>
  </div>
</footer>
