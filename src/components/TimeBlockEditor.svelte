<script>
    import { now } from "../stores";
    import * as palette from "../palette";
    import ColorBlock from "./ColorBlock.svelte";

    export let colors = [];
    export let time = new Date(0);
    export let purpose = "";
    let color = "unset";

    $: color = palette.pickSwatch(colors, purpose) || "unset";
</script>

<style>
    .current {
        background-color: lightgray;
    }
</style>

<ColorBlock {color}/>
<div class:current={+time <= +$now && +$now < +time + 10 * 60 * 1000}>{time.getHours()}:{time.getMinutes().toString().padStart(2, '0')}</div>
<input bind:value={purpose}>