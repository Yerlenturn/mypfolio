<script lang="ts">
  import TitleBar from "$lib/TitleBar.svelte";
  import Main from "./Main.svelte";
  import Nav from "$lib/Nav.svelte";
</script>

<div class="grid">
  <div class="contain">
    <header class="fixed superz"><Nav/></header>
    <div class="h-24"></div>
    <div class=" px-28 h-32">
      <TitleBar title="OPEN  TO  WORK"/>
    </div>
  </div>
  <div class='h-screen'>
    <Main/>
  </div>
</div>


<style>
  .superz {
    z-index: 1000;
  }
</style>