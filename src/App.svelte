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

<style>
	heading {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
	}

	#grids {
		margin-top: 4.5em;
	}
</style>

<heading>
	<DayGlance blocks={day.purposes} {palette}/>
	{#each Object.keys(palettes) as p}
		<label><input type="radio" bind:group={selectedPalette} value={p}>{p}</label>
	{/each}
</heading>
<div id="grids">
	<DayGrid blocks={day.purposes} {palette}/>
</div>
<DayEditor bind:day {palette}/>