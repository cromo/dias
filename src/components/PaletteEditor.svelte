<script>
  import { makeSwatch, compilePalette } from "../palette";
  import ColorBlock from "./ColorBlock.svelte";
  import TimeBlockEditor from "./TimeBlockEditor.svelte";
  export let palette = {name: "", swatches: []};

  const addSwatch = () => palette.swatches = [...palette.swatches, makeSwatch("", "", "")]
</script>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .grid {
    display: grid;
    grid-template-columns: 40px 1fr 1fr 5fr;
    grid-gap: 4px 4px;
    align-items: center;
  }

  .tester {
    width: 80%;
    display: grid;
    grid-template-columns: 40px 40px 1fr;
    grid-gap: 4px 4px;
    align-items: center;
  }

  div + div {
    margin-top: 1.5em;
  }
</style>

<section>
  <h1>{palette.name}</h1>
  
  <div class="tester">
    <TimeBlockEditor colors={compilePalette(palette)}/>
  </div>
  
  <div class="grid">
    {#each palette.swatches as swatch}
      <ColorBlock color={swatch.color}/>
      <input bind:value={swatch.color}/>
      <input bind:value={swatch.name}/>
      <input bind:value={swatch.pattern}/>
    {/each}
  </div>
  
  <div>
    <button on:click={addSwatch}>Add swatch</button>
  </div>
</section>