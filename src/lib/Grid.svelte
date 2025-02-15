<script lang="ts">
  let { children } = $props();
</script>


<section class="relative h-[65vh] w-full flex shrink-0 flex-col items-center justify-center -z-10 rounded-lg">
  <video class="absolute w-full h-full object-cover" muted autoplay loop playsinline disablepictureinpicture draggable="false" preload="none">
    <source src="/triangle.mp4" type="video/mp4">
  </video>
  <div class="grid grid-cols-2 gap-2 w-full h-full">
    {@render children()}
  </div>
</section>
