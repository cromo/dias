<script>
	import TimeBlockDayView from "./TimeBlockDayView.svelte";
	import TimeBlockDayEditor from "./TimeBlockDayEditor.svelte";
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

{#each Object.keys(palettes) as p}
<label>
	<input type="radio" bind:group={palette} value={p}>
	{p}
</label>
{/each}
<TimeBlockDayView {blocks} palette={palettes[palette]}/>
<TimeBlockDayEditor {blocks} palette={palettes[palette]}/>