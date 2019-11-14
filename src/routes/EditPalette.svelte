<script>
  import { rawPalettes } from "../stores";
  import PaletteEditor from "../components/PaletteEditor.svelte";
  export let params = {};
  let index = params.index;
</script>

<PaletteEditor bind:palette={$rawPalettes[index]}/>