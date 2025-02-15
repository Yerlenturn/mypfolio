<script lang="ts">
  let {} = $props();
</script>

<div class="glass"></div>

<style>

  .glass {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    backdrop-filter: blur(8px);
    background-color: rgba(165, 42, 110, 0.219);
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.089);
  }
</style>