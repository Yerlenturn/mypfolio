<script lang="ts">
	import '../app.css';
	import '$lib/startrek/style.css'
	import Nav from '$lib/Nav.svelte';
	import Theme from '$lib/Theme.svelte';
	import "@fontsource/titillium-web"
	let { children } = $props();
</script>

<Theme/>
<header><Nav/></header>
{@render children()}

<style>
  :global(body) {
    font-family: "Open Sans Variable", sans-serif;
  }
</style>