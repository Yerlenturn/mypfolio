<script lang="ts">
  import TitleBar from "$lib/TitleBar.svelte";
  import Main from "./Main.svelte";
  import Nav from "$lib/Nav.svelte";
</script>

<div class="grid">
  <div class="contain">
    <header class="fixed pb-11 superz"><Nav/></header>
    <div class=" px-28">
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