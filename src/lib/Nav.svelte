<script lang="ts">
  import ThemeButton from "./ThemeButton.svelte";
  import SlideMenu from "./SlideMenu.svelte";
  import { goto } from "$app/navigation";
  // import { theme } from "../stores/theme";
</script>

<nav class="flex items-center m-auto max-w-full trans bg-black">
	<a class="ml-10 pt-1" href="/">
    <img src="lilisvg.svg" style="filter: drop-shadow( -1px 1px 5px rgba(255, 255, 255, 0.8) );" alt="My deceased dog" width="75"/>
  </a>
  <div class="mr-auto title grid">
    ORION FLYNN
    <span>SOFTWARE ENGINEER</span>
    <span>& IT ENTHUSIAST</span>
  </div>
  <div class='flex items-center xl:mr-20 mr-8'>
    <SlideMenu
      items={[
        { name: 'Projects', action: () => goto('/projects') },
        { name: 'Thoughts', action: () => goto('/wtfrickisup') },
        { name: 'About', action: () => goto('/about') }
      ]}
    />
    <ThemeButton/>
  </div>
</nav>

<style>
  .trans {
    transition: background-color 0.1s, color 0.3s;
  }
  .title {
    font-size: 15px;
    font-weight: bolder;
  }
  .title > span {
    font-size: 10px;
    color: gray;
  }
</style>