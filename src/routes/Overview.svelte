<script>
    import { daysDescending, palette } from "../stores";
    import DayGlance from "../DayGlance.svelte";
</script>

{#each $daysDescending as day}
    <DayGlance blocks={day.purposes} palette={$palette}/>
{/each}