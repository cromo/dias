<script>
	import { newDay, toIsoDate } from "./day";
	import { makeSwatch, makePalette, testPalettes } from "./palette";
	import DayGlance from "./DayGlance.svelte";
	import DayGrid from "./DayGrid.svelte";
	import DayEditor from "./DayEditor.svelte";

	let days = {};
	const today = toIsoDate(new Date());
	if (!days.hasOwnProperty(today)) {
		days[today] = newDay();
	}
	let day = days[today];

	let palettes = testPalettes.reduce((palettes, palette) => {
		palettes[palette.name] = palette;
		return palettes;
	},{});
	let selectedPalette = testPalettes[0].name;
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