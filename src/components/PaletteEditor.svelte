<script>
  import ColorBlock from "./ColorBlock.svelte";
  export let palette = {name: "", swatches: []};
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: 40px 1fr 10fr;
    grid-gap: 4px 4px;
  }
</style>

{palette.name}

<div class="grid">
  {#each palette.swatches as swatch}
    <ColorBlock color={swatch.color}/>
    <div>{swatch.name}</div>
    <div>{swatch.pattern}</div>
  {/each}
</div>