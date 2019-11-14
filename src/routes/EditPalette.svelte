<script>
  import { replace } from "svelte-spa-router";
  import { makePalette } from "../palette";
  import { rawPalettes } from "../stores";
  import PaletteEditor from "../components/PaletteEditor.svelte";
  export let params = {};
  let index = params.index;
  if (index === "new") {
    index = $rawPalettes.length;
    $rawPalettes = [...$rawPalettes, makePalette("Unnamed", [])];
    replace(`#/palette/${index}`);
  }
</script>

<PaletteEditor bind:palette={$rawPalettes[index]}/>