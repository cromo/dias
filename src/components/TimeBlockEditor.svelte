<script>
    import * as palette from "../palette";

    export let colors = [];
    export let time = new Date(0);
    export let purpose = "";
    let color = "unset";

    $: color = palette.pickSwatch(colors, purpose) || "unset";
</script>

<style>
    .block {
        width: 40px;
        height: 40px;
    }

    .unset {
        outline: 2px solid gray;
    }
</style>

<div class=block class:unset={color === "unset"} style="background-color: {color}"></div>
<div>{time.getHours()}:{time.getMinutes().toString().padStart(2, '0')}</div>
<input bind:value={purpose}>