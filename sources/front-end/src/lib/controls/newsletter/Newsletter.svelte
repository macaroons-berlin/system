<script>
  import {
    onMount,
    onDestroy,
    // createEventDispatcher,
  } from 'svelte';

  // const dispatch = createEventDispatcher();
  let email = '';
  let channel;
  let disabledControl = false;
  let reenabledControl = false;

  $: {
    reenabledControl = !disabledControl;
  }

  const handleSubscriberEmailSubmit = (event) => {
    if (email?.length > 0) {
      channel?.postMessage({
        payload: email,
      });

      disabledControl = true;
      // dispatch('newsletter-subscriber-email', {
      //   payload: email,
      // });
    }
  }

  const handleNewsletterSubscriptionResult = ({ isTrusted, data }) => {
    disabledControl = isTrusted && !data?.payload?.done;

    if (disabledControl === false) {
      email = '';
    }
  }

  onMount(() => {
    channel = new BroadcastChannel('newsletter-subscription');
    channel?.addEventListener('message', handleNewsletterSubscriptionResult);
  });

  onDestroy(() => {
    channel?.removeEventListener('message', handleNewsletterSubscriptionResult);
    channel?.close();
  });
</script>

<style>
  form {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    height: 8rem;

    padding: 1rem 0;
  }

  .join-newsletter-title,
  .join-newsletter-input {
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
  }

  .join-newsletter-title {
    padding: 0 0 3rem 0;
  }

  .join-newsletter-input > input {
    display: flex;
    flex: 1 0 auto;
    max-width: 50rem;
    padding: 1rem 0.75rem;
  }
</style>

<form on:submit|preventDefault|stopPropagation|trusted={handleSubscriberEmailSubmit}>
  <label for='email-input' class='nav-text join-newsletter-title'>join our newsletter</label>
  <div class='join-newsletter-input'>
    <input
      id='email-input'
      type='email'
      name='newsletter-subscriber-email'
      placeholder='your email address'
      required
      autocomplete
      bind:value={email}
      class:disabledControl
      class:reenabledControl
    />
  </div>
</form>