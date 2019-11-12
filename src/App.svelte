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
	const randomActivity = () => ["hn", "read", "shopping", "youtube", "work", "", "", ""][Math.floor(Math.random() * 8)];
	days["2019-11-10"].purposes = days["2019-11-10"].purposes.map(randomActivity);
	days["2019-11-09"].purposes = days["2019-11-09"].purposes.map(randomActivity);
	days[today].purposes = days[today].purposes.map(randomActivity);

	let datesWithData = daysWithDataDescending(days);
	$: datesWithData = daysWithDataDescending(days);

	let palettes = testPalettes.reduce((palettes, palette) => {
		palettes[palette.name] = palette;
		return palettes;
	},{});
	let selectedPalette = testPalettes[0].name;
	$: palette = palettes[selectedPalette];

	let view = "grids";
	let editDay = "";

	function daysWithDataDescending(days) {
		const daysWithData = Object.keys(days);
		daysWithData.sort();
		daysWithData.reverse();
		return daysWithData;
	}

	function viewAll(focus) {
		view = "overview";
	}

	function edit(date) {
		editDay = date;
		view = "editor";
	}
</script>

<style>
	heading {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
	}

	main {
		margin-top: 4.5em;
	}

	#grids > * + * {
		margin-top: 1.5em;
	}

	#grids .day {
		display: flex;
	}
</style>

<heading>
	<DayGlance blocks={days[today].purposes} {palette}/>
	{#each Object.keys(palettes) as p}
		<label><input type="radio" bind:group={selectedPalette} value={p}>{p}</label>
	{/each}
</heading>
<main>
	{#if view === "overview"}
		{#each datesWithData as date}
			<DayGlance blocks={days[date].purposes} {palette}/>
		{/each}
	{:else if view === "grids"}
		<div id="grids">
			{#each datesWithData as date}
				<section>
					<h1>{date}</h1>
					<div class="day">
						<button on:click={() => viewAll(date)}>‹</button>
						<DayGrid blocks={days[date].purposes} {palette}/>
						<button on:click={() => edit(date)}>›</button>
					</div>
				</section>
			{/each}
		</div>
	{:else if view === "editor"}
		<DayEditor bind:day={days[editDay]} {palette}/>
	{/if}
</main>