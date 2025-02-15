<script lang="ts">
  import { onMount } from "svelte";
	import { quadInOut } from "svelte/easing";
	import { fly } from "svelte/transition";
  const { title }: {title: string} = $props();

  let visible = $state(false);

  onMount(() => visible = true);
</script>

<div class="flex flex-row justify-between nuts text-[30px] md:text-[60px] lg:text-[80px] w-full">
{#each title as letter, i}
  {#if visible}
    <span
      transition:fly={{
        y: -50,
        delay: 100 * i,
        duration: 1000,
        opacity: 0,
        easing: quadInOut
      }}
      >
      {letter}
    </span>
  {/if}
{/each}
</div>

<style>
  .nuts {
    font-weight: 900;
    animation: move linear both;
  }

  @keyframes move {
    from {
      transform: translateY(-500px);
    }
  }
</style>