<script context="module">
  export const prerender = true;
</script>

<script>
  import {
    onMount,
    onDestroy,
  } from 'svelte';

  let channel;

  const handleNewsletterSubscriptionRequest = ({ isTrusted, data, target }) => {
    if (isTrusted !== true) {
      return;
    }

    console.log('handleNewsletterSubscriptionRequest', data?.payload);

    // TODO: this is for testing. remove it.
    const to = setTimeout(() => {
      clearTimeout(to);

      target.postMessage({
        payload: {
          done: true,
        },
      });
    }, 1000);

  }

  onMount(() => {
    channel = new BroadcastChannel('newsletter-subscription');
    channel?.addEventListener('message', handleNewsletterSubscriptionRequest)
  });

  onDestroy(() => {
    channel?.removeEventListener('message', handleNewsletterSubscriptionRequest)
    channel?.close();
  });
</script>

index