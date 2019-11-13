<script>
    import { toIsoDate } from "../day";
    import { days, palette } from "../stores";
    import DayEditor from "../components/DayEditor.svelte";

    export let params = {};
</script>

<DayEditor bind:day={$days[params.date]} palette={$palette}/>