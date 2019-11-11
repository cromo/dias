<script>
    import { pickSwatch } from "./palette";
    export let blocks = [];
    export let palette = [];
</script>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(100, 1fr);
    }

    .grid > div {
        height: 8px;
    }
</style>

<div class=grid>
    {#each blocks as block}
        <div style={`background-color: ${pickSwatch(palette, block)}`}></div>
    {/each}
</div>