<script lang="ts">
  interface CardProps {
    link?: string
    cover: string
    titleImg: string
    coolImg: string
  }
  let {link, cover, titleImg, coolImg} : CardProps = $props();
  import { getContext } from 'svelte';
	import { onDestroy } from 'svelte';
	import type { Writable } from 'svelte/store';

	const intersectionContext: Writable<{observe: (element: any) => void, unobserve: (element: any) => void, onIntersect: EventTarget}> = getContext('intersection-observer');
	const cleanup: any[] = [];
	let root = $state();
	let visible = $state(false);

	onDestroy(() => cleanup.forEach(fn => fn()));

	$effect(() => {
    if ($intersectionContext && root) {
      $intersectionContext.observe(root);
      cleanup.push(() => $intersectionContext.unobserve(root));

      $intersectionContext.onIntersect.addEventListener('intersect', onIntersect);
      cleanup.push(() =>
        $intersectionContext.onIntersect
          .removeEventListener('intersect', onIntersect)
      );
    };
	})

	function onIntersect(e: any) {
		const entries = e.detail;
		const entry = entries.find((entry: any) => entry.target === root);

		if (entry)
			visible = entry.isIntersecting;
	}
</script>

<div bind:this={root} class:come={visible} class='go'>
{#if link}
  <a href={link} target="_blank" aria-label="balls">
    <div class="card">
      <div class="wrapper">
        <img src={cover} class="cover-image" alt=""/>
      </div>
      <img src={titleImg} class="title" alt="" />
      <img src={coolImg} class="character" alt="" />
    </div>
  </a>
{:else}
  <div class="card">
    <div class="wrapper">
      <img src={cover} class="cover-image" alt=""/>
    </div>
    <img src={titleImg} class="title" alt="" />
    <img src={coolImg} class="character" alt="" />
  </div>
{/if}
</div>

<style>
  .card {
    width: var(--card-width);
    height: var(--card-height);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 0 36px;
    perspective: 2500px;
    margin: 0 50px;
  }

  .cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .wrapper {
    transition: all 0.5s;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  .card:hover .wrapper {
    transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
    box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  }

  .wrapper::before,
  .wrapper::after {
    content: "";
    opacity: 0;
    width: 100%;
    height: 80px;
    transition: all 0.5s;
    position: absolute;
    left: 0;
  }
  .wrapper::before {
    top: 0;
    height: 100%;
    background-image: linear-gradient(
      to top,
      transparent 46%,
      rgba(12, 13, 19, 0.5) 68%,
      rgba(12, 13, 19) 97%
    );
  }
  .wrapper::after {
    bottom: 0;
    opacity: 1;
    background-image: linear-gradient(
      to bottom,
      transparent 46%,
      rgba(12, 13, 19, 0.5) 68%,
      rgba(12, 13, 19) 97%
    );
  }

  .card:hover .wrapper::before,
  .wrapper::after {
    opacity: 1;
  }

  .card:hover .wrapper::after {
    height: 120px;
  }
  .title {
    width: 100%;
    transition: transform 0.5s;
  }

  .card:hover .title {
    transform: translate3d(0%, -50px, 100px);
  }

  .character {
    width: 100%;
    opacity: 0;
    transition: all 0.5s;
    position: absolute;
    z-index: -1;
  }

  .card:hover .character {
    opacity: 1;
    transform: translate3d(0%, -30%, 100px);
  }

	.go {
		opacity: 0;
    display: flex;
    transition: all 1s;
	}

  .come {
    opacity: 1;
		display: flex;
    transform: translateY(50px);
		align-items: center;
		justify-content: center;
		outline-offset: 10px;
	}

</style>