<script>
    import { pickSwatch } from "../palette";
    import ColorBlock from "./ColorBlock.svelte";
    export let blocks = [];
    export let palette = [];
</script>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(10, 40px);
    }
</style>

<div class=grid>
    {#each blocks as block}
        <ColorBlock color={pickSwatch(palette, block) || "unset"}/>
    {/each}
</div>