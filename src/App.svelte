<script>
	import { newDay, toIsoDate } from "./day";
	import { makeSwatch, makePalette, testPalettes } from "./palette";
	import DayGlance from "./DayGlance.svelte";
	import DayGrid from "./DayGrid.svelte";
	import DayEditor from "./DayEditor.svelte";

	let days = {
		"2019-11-10": newDay(),
		"2019-11-09": newDay()
	};
	const today = toIsoDate(new Date());
	if (!days.hasOwnProperty(today)) {
		days[today] = newDay();
	}

	let datesWithData = daysWithDataDescending(days);
	$: datesWithData = daysWithDataDescending(days);

	let palettes = testPalettes.reduce((palettes, palette) => {
		palettes[palette.name] = palette;
		return palettes;
	},{});
	let selectedPalette = testPalettes[0].name;
	$: palette = palettes[selectedPalette];

	function daysWithDataDescending(days) {
		const daysWithData = Object.keys(days);
		daysWithData.sort();
		daysWithData.reverse();
		return daysWithData;
	}
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

	#grids > * + * {
		margin-top: 1.5em;
	}
</style>

<heading>
	<DayGlance blocks={days[today].purposes} {palette}/>
	{#each Object.keys(palettes) as p}
		<label><input type="radio" bind:group={selectedPalette} value={p}>{p}</label>
	{/each}
</heading>
<div id="grids">
	{#each datesWithData as date}
		<div>
			<DayGrid blocks={days[date].purposes} {palette}/>
		</div>
	{/each}
	<!-- <DayGrid blocks={day.purposes} {palette}/> -->
</div>
<DayEditor bind:day={days[today]} {palette}/>