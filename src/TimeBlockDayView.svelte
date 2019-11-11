<script>
    import { pickSwatch } from "./palette";
    export let blocks = [];
    export let palette = [];
</script>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(10, 40px);
    }

    .block {
        width: 40px;
        height: 40px;
    }

    .unset {
        outline: 2px solid gray;
    }
</style>

<div class=grid>
    {#each blocks as {purpose}}
        <div class=block class:unset={!pickSwatch(palette, purpose)} style={`background-color: ${pickSwatch(palette, purpose)}`}></div>
    {/each}
</div>