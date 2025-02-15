<script lang="ts">
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { onMount } from 'svelte';

	const context: Writable<{observe: (element: any) => void, unobserve: (element: any) => void, onIntersect: EventTarget} | null> = setContext('intersection-observer', writable(null));

	onMount(() => {
		const event = new EventTarget();
		const observer = new IntersectionObserver(
			entries => event.dispatchEvent(new CustomEvent('intersect', { detail: entries })),
			{ root: null, rootMargin: '0px', threshold: 0 },
		);

		$context = {
			observe: element => observer.observe(element),
			unobserve: element => observer.unobserve(element),
			onIntersect: event,
		};

		return () => observer.disconnect();
	});

  let { children } = $props();
</script>

<div class='flex flex-col items-center w-11/12'>
	{@render children()}
</div>
