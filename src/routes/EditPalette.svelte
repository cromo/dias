<script>
  import { palettes } from "../stores";
  import PaletteEditor from "../components/PaletteEditor.svelte";
  export let params = {};
  let name = decodeURIComponent(params.name);
</script>

<PaletteEditor palette={$palettes[name]}/>