<script>
    import { toIsoDate } from "../day";
    import { daysDescending, palette } from "../stores";
    import DayGrid from "../components/DayGrid.svelte";
</script>

<div id="grids">
    {#each $daysDescending as day}
        <section>
            <h1>{toIsoDate(day.startTime)}</h1>
            <div class="day">
                <a href="#/overview">‹</a>
                <DayGrid blocks={day.purposes} palette={$palette}/>
                <a href="#/edit/{toIsoDate(day.startTime)}">›</a>
            </div>
        </section>
    {/each}
</div>
