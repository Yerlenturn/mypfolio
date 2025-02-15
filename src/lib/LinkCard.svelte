<script lang="ts">
  interface CardProps {
    link: string
    color: string
    title: string
    icon: string
  }
  let {link, color, title, icon} : CardProps = $props();
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
  <a href={link} target="_blank" aria-label="balls">
    <div class="link-card">
      <div class="wrapper" style="background-color: rgba({color}, 0.19);"></div>
      <div class="title-word">{title}</div>
      <img src={icon} class="character" alt="" />
    </div>
  </a>
</div>

<style>
  .link-card {
    width: var(--link-card-width);
    height: var(--link-card-height);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 0 36px;
    perspective: 2500px;
    margin: 0 50px;
    color: white;
  }

  .wrapper {
    transition: all 0.5s;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 50px;
    backdrop-filter: blur(8px);
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.089);
  }

  .link-card:hover .wrapper {
    transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
    box-shadow: 2px 15px 32px -8px rgba(255, 255, 255, 0.5);
    -webkit-box-shadow: 2px 15px 32px -8px rgba(255, 255, 255, 0.5);
    -moz-box-shadow: 2px 15px 32px -8px rgba(255, 255, 255, 0.5);
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
    border-radius: 50px;
    background-image: linear-gradient(
      to top,
      transparent 83%,
      rgba(243, 242, 236, 0.5) 100%,
      rgba(243, 242, 236) 97%
    );
  }
  .wrapper::after {
    bottom: 0;
    opacity: 1;
    border-radius: 30px;
    background-image: linear-gradient(
      to bottom,
      transparent 90%,
      rgba(243, 242, 236, 0.5) 100%,
      rgba(243, 242, 236) 97%
    );
  }

  .link-card:hover .wrapper::before,
  .wrapper::after {
    opacity: 1;
  }

  .link-card:hover .wrapper::after {
    height: 120px;
  }

  .title-word {
    width: 100%;
    bottom: 20%;
    font-size: 25px;
    transition: transform 0.5s;
    display: flex;
    position: absolute;
    justify-content: center;
  }

  .link-card:hover .title-word {
    transform: translate3d(0%, -50px, 100px);
    transform: translateY(-20px);
  }

  .character {
    width: 50%;
    opacity: 0;
    transition: all 0.5s;
    position: absolute;
    z-index: -1;
  }

  .link-card:hover .character {
    opacity: 1;
    transform: translate3d(0%, -90%, 100px);
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