<script lang="ts">
  import ThemeButton from "./ThemeButton.svelte";
  import SlideMenu from "./SlideMenu.svelte";
  import { goto } from "$app/navigation";
  // import { theme } from "../stores/theme";
</script>

<nav class="m-auto w-screen overflow-hidden fixed">
  <div class="relative flex m-auto items-center max-w-full">
    <a class="ml-10 pt-1 norm" href="/">
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
  </div>
</nav>

<style>
  .title {
    font-size: 15px;
    font-weight: bolder;
    mix-blend-mode: difference;
  }
  .title > span {
    font-size: 10px;
    color: gray;
  }
</style>