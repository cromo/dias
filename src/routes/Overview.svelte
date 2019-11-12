<script>
    import { daysDescending } from "../stores";
    import DayGlance from "../DayGlance.svelte";
    import { testPalettes } from "../palette";
</script>

{#each $daysDescending as day}
    <DayGlance blocks={day.purposes} palette={testPalettes[0]}/>
{/each}