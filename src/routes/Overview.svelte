<script>
    import { daysDescending, palette } from "../stores";
    import DayGlance from "../components/DayGlance.svelte";
</script>

{#each $daysDescending as day}
    <DayGlance blocks={day.purposes} palette={$palette}/>
{/each}