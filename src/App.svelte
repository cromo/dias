<script>
	import { makeSwatch, makePalette } from "./palette";
	import TimeBlockDayView from "./TimeBlockDayView.svelte";
	import TimeBlockDayEditor from "./TimeBlockDayEditor.svelte";
	let palette = "creative";

	let blocks = newDay();
	let palettes = {
		creative: makePalette("Creative", [
			makeSwatch("reading", "#1df", /read/i),
			makeSwatch("writing", "green", /writ/i),
			makeSwatch("debugging", "red", /debug/i),
			makeSwatch("hacker news", "orange", /hn|hacker news/i),
			makeSwatch("streaming", "red", /youtube|netflix/i),
			makeSwatch("shopping", "yellow", /shopping|amazon/i),
			makeSwatch("working", "gray", /work/i),
			makeSwatch("sleeping", "navy", /sleep|nap|rest/i),
		]),
		hnVsWork: makePalette("HN vs. Work", [
			makeSwatch("Hacker News", "orange", /hn|hacker news|article/i),
			makeSwatch("Work", "green", /work|code|debug|write/i),
		])
	};

	function newDay(startTime) {
		startTime = startTime || Date.now();
		return {startTime, purposes: new Array(100).fill("")};
	}
</script>

{#each Object.keys(palettes) as p}
<label>
	<input type="radio" bind:group={palette} value={p}>
	{p}
</label>
{/each}
<TimeBlockDayView {blocks} palette={palettes[palette]}/>
<TimeBlockDayEditor bind:blocks palette={palettes[palette]}/>