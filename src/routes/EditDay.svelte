<script>
    import { toIsoDate } from "../day";
    import { days } from "../stores";
    import DayEditor from "../DayEditor.svelte";
    import { testPalettes } from "../palette";

    export let params = {};
</script>

<DayEditor bind:day={$days[params.date]} palette={testPalettes[0]}/>