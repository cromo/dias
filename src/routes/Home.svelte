<script>
    import { toIsoDate } from "../day";
    import { daysDescending, palette } from "../stores";
    import DayGrid from "../components/DayGrid.svelte";
</script>

<style>
    h1 {
        text-align: center;
    }
    .day {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
    }
    .day > a {
        flex-grow: 1;
        font-size: 12em;
        text-align: center;
        vertical-align: middle;
    }
    .day > a:hover {
        text-decoration: none;
    }
</style>

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
