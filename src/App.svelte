<script>
	import { newDay } from "./day";
	import { makeSwatch, makePalette } from "./palette";
	import DayGlance from "./DayGlance.svelte";
	import DayGrid from "./DayGrid.svelte";
	import DayEditor from "./DayEditor.svelte";

	let selectedPalette = "creative";

	let day = newDay();
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
	$: palette = palettes[selectedPalette];
</script>

<DayGlance blocks={day.purposes} {palette}/>
{#each Object.keys(palettes) as p}
<label>
	<input type="radio" bind:group={selectedPalette} value={p}>
	{p}
</label>
{/each}
<DayGrid blocks={day.purposes} {palette}/>
<DayEditor bind:day {palette}/>