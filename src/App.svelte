<script>
	import TimeBlock from "./TimeBlock.svelte"
	let palette = "creative";

	let blocks = newDay();
	let palettes = {
		creative: [
			{color: "#1df", pattern: /read/i},
			{color: "green", pattern: /writ/i},
			{color: "red", pattern: /debug/i},
			{color: "orange", pattern: /hn|hacker news/i},
			{color: "red", pattern: /youtube|netflix/i},
			{color: "yellow", pattern: /shopping|amazon/i},
			{color: "gray", pattern: /work/i},
			{color: "navy", pattern: /sleep|nap|rest/i},
		],
		hnVsWork: [
			{color: "orange", pattern: /hn|hacker news|article/i},
			{color: "green", pattern: /work|code|debug|write/i},
		]
	};

	function newDay(startTime) {
		startTime = startTime || Date.now();
		return new Array(100)
			.fill(void 0)
			.map((_, i) => ({
				time: new Date(+startTime + i * 10 * 60 * 1000),
				purpose: ""
			}));
	}
</script>

<style>
	.grid {
		display: grid;
		grid-template-columns: 40px 40px 1fr;
		grid-gap: 4px 4px;
		align-items: center;
	}
</style>

{#each Object.keys(palettes) as p}
<label>
	<input type="radio" bind:group={palette} value={p}>
	{p}
</label>
{/each}
<div class=grid>
	{#each blocks as {time, purpose}}
		<TimeBlock {time} bind:purpose colors={palettes[palette]}/>
	{/each}
</div>
