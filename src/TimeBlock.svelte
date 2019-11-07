<script>
    export let colors = [];
    export let time = "00:00";
    export let purpose = "";
    let color = "unset";

    $: {
        const matches = colors.map(({color: c, pattern: p}) => ({color: c, match: purpose.match(p)})).filter(x => x.match);
        matches.sort((a, b) => a.match.index - b.match.index);
        color = matches.length ? matches[0].color : "unset";
    }
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