<script lang="ts">
	import '../app.css';
	import Nav from '$lib/Nav.svelte';
	let { children } = $props();
</script>

<header><Nav/></header>
{@render children()}
