<script>
    import { pickSwatch } from "../palette";
    import ColorBlock from "./ColorBlock.svelte";
    export let blocks = [];
    export let palette = [];
</script>

<style>
    .grid {
        max-width: 400px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>

<div class=grid>
    {#each blocks as block}
        <ColorBlock color={pickSwatch(palette, block) || "unset"}/>
    {/each}
</div>