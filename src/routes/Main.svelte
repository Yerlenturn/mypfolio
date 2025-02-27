<script lang="ts">
	import Card from "$lib/CoolCard.svelte";
	import IntersectCtx from "$lib/IntersectCtx.svelte";
	import LinkCard from "$lib/LinkCard.svelte";
	import Grid from "$lib/Grid.svelte";
	import GridCard from "$lib/GridCard.svelte";
	
  const lc = [
    {
      title: "GitHub",
      link: "https://github.com/Yerlenturn",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      color: "89, 89, 89"
    },
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/in/orion-flynn-687856255/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png",
      color: "12, 140, 238"
    }
  ]

  let y = $state(0);
</script>

<svelte:window bind:scrollY={y}/>

<div class="flex w-full justify-center">
  <IntersectCtx>
    <Grid>
      <GridCard></GridCard>
      <GridCard></GridCard>
      <GridCard></GridCard>
      <GridCard></GridCard>
    </Grid>
    <div class="flex items-center justify-center h-[30vh]">
      {#each lc as i}
        <LinkCard title={i.title} link={i.link} icon={i.logo} color={i.color}/>
      {/each}
    </div>
  </IntersectCtx>
</div>

<style>
  :root {
    --card-height: 300px;
    --card-width: calc(var(--card-height) / 1.5);
    --link-card-height: 60px;
    --link-card-width: calc(var(--card-height) / 4);
  }
</style>