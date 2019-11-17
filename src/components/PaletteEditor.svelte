<script>
  import { makeSwatch, compilePalette } from "../palette";
  import ColorBlock from "./ColorBlock.svelte";
  import TimeBlockEditor from "./TimeBlockEditor.svelte";
  export let palette = {name: "", swatches: []};

  const addSwatch = () => palette.swatches = [...palette.swatches, makeSwatch("", "", "")];
  const remove = i => palette.swatches = [
    ...palette.swatches.slice(0, i),
    ...palette.swatches.slice(i + 1)
  ];
</script>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .grid {
    display: grid;
    grid-template-columns: 40px 40px 1fr 1fr 5fr;
    grid-gap: 4px 4px;
    align-items: center;
  }

  h1, input {
    min-width: 5ch;
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
  <h1><input bind:value={palette.name}/></h1>
  
  <div class="tester">
    <TimeBlockEditor colors={compilePalette(palette)}/>
  </div>
  
  <div class="grid">
    {#each palette.swatches as swatch, i}
      <button on:click={() => remove(i)}>❌</button>
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