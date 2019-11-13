<script>
  import ColorBlock from "./ColorBlock.svelte";
  import TimeBlockEditor from "./TimeBlockEditor.svelte";
  export let palette = {name: "", swatches: []};
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: 40px 1fr 1fr 5fr;
    grid-gap: 4px 4px;
    align-items: center;
  }

  .tester {
    margin-left: 10%;
    margin-right: 10%;
    display: grid;
    grid-template-columns: 40px 40px 1fr;
    grid-gap: 4px 4px;
    align-items: center;
  }

  div + div {
    margin-top: 1.5em;
  }
</style>

<h1>{palette.name}</h1>

<div class="tester">
  <TimeBlockEditor colors={palette}/>
</div>

<div class="grid">
  {#each palette.swatches as swatch}
    <ColorBlock color={swatch.color}/>
    <input bind:value={swatch.color}/>
    <input bind:value={swatch.name}/>
    <input bind:value={swatch.pattern}/>
  {/each}
</div>