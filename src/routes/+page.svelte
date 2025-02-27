<script lang="ts">
  import TitleBar from "$lib/TitleBar.svelte";
  import Main from "./Main.svelte";
  import Nav from "$lib/Nav.svelte";
	import FlyIn from "$lib/FlyIn.svelte";
</script>

<div class="grid">
  <div class="contain">
    <header class="fixed superz"><Nav/></header>
    <div class="h-24"></div>
    <FlyIn class="px-28 h-32"
      animationLength={400} thresholdFactor={0.13} x={0} y={-80} opacity={1}
    >
      <div class="movement">
        <TitleBar title="OPEN  TO  WORK"/>
      </div>
    </FlyIn>
  </div>
  <div class='h-screen'>
    <Main/>
  </div>
</div>


<style>
  .superz {
    z-index: 1000;
  }

  .movement {
    transform: translateY(30px);
  }

</style>