<script lang="ts">
  import { fly } from 'svelte/transition';
  import { sineInOut } from 'svelte/easing'
  import { clickOutside } from './clickOutside';
  import { writable, type Writable } from 'svelte/store';
	import { onMount } from 'svelte';
  import { theme } from '../stores/theme';

  const { items }: {items: MenuItem[]} = $props();

  interface MenuItem {
    name: string;
    action: () => void;
  }

  const isOpen: Writable<boolean> = writable(false);
  const isMobile: Writable<boolean> = writable(false);
  let mounted = $state(false);

  onMount(() => {
    mounted = true;
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  });

  const checkViewport = (): void => {
    isMobile.set(window.innerWidth < 768);
  };

  $effect(() => {
    if (mounted && typeof document !== 'undefined') {
      document.body.style.overflow = $isOpen && $isMobile ? 'hidden' : '';
    }
  });
</script>

<div class='flex items-center'>
<!-- Mobile overlay and menu -->
{#if $isMobile}
  {#if $isOpen}
    <button
      class="fixed inset-0 bg-black/50 z-40"
      onclick={() => $isOpen = false}
      aria-label='close'
    ></button>
    <div
      transition:fly={{
        x: 300,
        delay: 10,
        opacity: 1, 
        easing: sineInOut
      }}
      class="fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-800 shadow-xl z-50 transform transition-transform duration-300 ease-in-out border-l-8 p-2 { $isOpen ? 'translate-x-0' : 'translate-x-full' }"
    >
    WHERE
      {#each items as item}
        <button
          class="mt-1 mb-1 p-3 rounded-lg cursor-pointer transition-colors bg-transparent w-full"
          onclick={item.action}
        >
          <span class="animate-pulse menu-item">
            {item.name}
          </span>
        </button>
      {/each}
    </div>
  {/if}
{:else}
  <!-- Desktop menu -->
  <div
    class="flex mr-4 top-full bg-transparent rounded-lg z-50 space-x-4"
    use:clickOutside onoutclick={() => $isOpen = false}
  >
    {#each items as item, i}
      {#if $isOpen}
        <button
          transition:fly={{
            x: 200 - (80 * i),
            delay: 100 * i,
            easing: sineInOut
          }}
          class="bg-transparent border-0 menu-item"
          onclick={item.action}
          use:clickOutside onoutclick={() => $isOpen = false}
        >
          {item.name}
        </button>
        <!-- <div
          transition:fly={{
            x: 200 - (80 * i),
            delay: 100 * i,
            easing: sineInOut
          }}
          class='animate-spin menu-item laser font-extrabold'
        >
          ⇒
        </div> -->
      {/if}
    {/each}
  </div>
{/if}

<button
  class={$theme == 'dark' ? "darkraised relative p-2 bg-transparent mr-1" : "raised relative p-2 bg-transparent mr-1"}
  onclick={() => $isOpen = !$isOpen}
  aria-label="Menu"
>
  <svg class="w-6 h-6" fill="none" stroke="#f500f5" viewBox="0 0 24 24">
    <path fill="#f500f5" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>
</div>

<style>
  .raised {
    border-radius: .4rem;
    border-style: solid;
    border-color: #f2f2f2 #ebebeb #ebebeb #f2f2f2;
    border-width: 1px 2px 2px 1px;
  }
  :hover.raised {
    border-color: #ebebeb #dbdbdb #dbdbdb #ebebeb;
  }
  :active.raised {
    border-width: 2px 1px 1px 2px;
    border-color: #dbdbdb #ebebeb #ebebeb #dbdbdb;
  }

  .darkraised {
    border-radius: .4rem;
    border-style: solid;
    border-color: hsl(220,15%,22%) hsl(220,14%,16%) hsl(220,14%,16%) hsl(220,15%,22%);
    border-width: 1px 2px 2px 1px;
  }
  :hover.darkraised {
    border-color: hsl(220,15%,32%) hsl(220,14%,16%) hsl(220,14%,16%) hsl(220,15%,32%);
  }
  :active.darkraised {
    border-width: 2px 1px 1px 2px;
    border-color: hsl(220,14%,16%) hsl(220,15%,32%) hsl(220,15%,32%) hsl(220,14%,16%);
  }

  .menu-item {
    color: deeppink;
    font-size: medium;
    text-shadow: 2px 1px 5px blueviolet;
  }

  /* .laser {
    font-size: xx-large;
  } */

</style>
