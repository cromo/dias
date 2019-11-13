<script>
    import { newDay, toIsoDate } from "../day";
    import { days, palette } from "../stores";
    import DayEditor from "../components/DayEditor.svelte";

    export let params = {};
    $: if (params.date && !$days.hasOwnProperty(params.date)) {
        $days[params.date] = newDay();
    }
</script>

<DayEditor bind:day={$days[params.date]} palette={$palette}/>