<script>
  import Newsletter from '$lib/controls/newsletter/Newsletter.svelte';
</script>

<style>
  footer {
  display: grid;
  grid-template-columns: 0.75fr repeat(4, 1fr) 0.75fr;
  grid-template-rows: 4rem 1fr 4rem;
  grid-template-areas:
    '. . newsletter newsletter . .'
    '. help company follow-us other .'
    '. info info info info .';
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

  .other {
    grid-area: other;
  }

  .info {
    grid-area: info;
  }
</style>

<footer>
  <div class='newsletter'><Newsletter /></div>
  <div class='help'>
    <ul>
      <li>frequently asked questions</li>
      <li>how to purchase</li>
      <li>transport and delivery</li>
      <li>payments</li>
      <li>contact</li>
    </ul>
  </div>
  <div class='company'>
    <ul>
      <li>services</li>
      <li>history of the brand</li>
    </ul>
  </div>
  <div class='follow-us'>
    <ul>
      <li>facebook</li>
      <li>twitter</li>
      <li>youtube</li>
      <li>instagram</li>
    </ul>
  </div>
  <div class='other'></div>
  <div class='info'>
    <ul>
      <li>GDPR</li>
      <li>imprint</li>
    </ul>
  </div>
</footer>
