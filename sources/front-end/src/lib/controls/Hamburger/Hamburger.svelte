<script>
  import {
    onMount,
    onDestroy,
  } from 'svelte';
  import {
    shouldHandleEvent,
  } from '$lib/helpers/shouldHandleEvent.mjs';

  let channel;

  const handleHamburgerRelatedMessage = (messageEvent) => {
    console.log('handleHamburgerRelatedMessage', messageEvent);
  }

  const handleHamburgerClick = (pointerEvent) => {
    if (shouldHandleEvent(pointerEvent) === false) {
      return;
    }

    channel.postMessage({});
  }

  onMount(() => {
    channel = new BroadcastChannel('hamburger');
    channel?.addEventListener('message', handleHamburgerRelatedMessage);
  });

  onDestroy(() => {
    channel?.removeEventListener('message', handleHamburgerRelatedMessage);
    channel?.close();
  });
</script>

<style>
  .hamburger {
    cursor: pointer;
  }

  .hamburger:hover {
    color: var(--accent-color);
    transition: color var(--transition-duration) var(--transition-timing-function);
  }
</style>

<div class='hamburger nav-text' on:click|preventDefault|stopPropagation={handleHamburgerClick}>☰</div>