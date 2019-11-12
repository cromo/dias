<script>
    import { toIsoDate } from "../day";
    import { daysDescending, palette } from "../stores";
    import DayGrid from "../DayGrid.svelte";
</script>

<div id="grids">
    {#each $daysDescending as day}
        <section>
            <h1>{toIsoDate(day.startTime)}</h1>
            <div class="day">
                <button>‹</button>
                <DayGrid blocks={day.purposes} palette={$palette}/>
                <button>›</button>
            </div>
        </section>
    {/each}
</div>
