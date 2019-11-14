<script>
    import { sortedPalettes } from "../stores";
    import ColorBlock from "../components/ColorBlock.svelte";
</script>

<style>
    .swatches {
        display: flex;
        flex-wrap: wrap;
    }
</style>

{#each $sortedPalettes as palette}
    <section>
        <h1><a href="#/palette/{palette.index}">{palette.name}</a></h1>
        <div class=swatches>
            {#each palette.swatches as swatch}
                <ColorBlock color={swatch.color}/>
            {/each}
        </div>
    </section>
{/each}