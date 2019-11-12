<script>
	import { newDay, toIsoDate } from "./day";
	import { makeSwatch, makePalette, testPalettes } from "./palette";
	import { days, daysDescending } from "./stores";
	import DayGlance from "./DayGlance.svelte";
	import DayGrid from "./DayGrid.svelte";
	import DayEditor from "./DayEditor.svelte";

	import Router from "svelte-spa-router";
	import EditDay from "./routes/EditDay.svelte";
	import Home from "./routes/Home.svelte";
	import Overview from "./routes/Overview.svelte";

	const routes = {
		"/": Home,
		"/overview": Overview,
		"/edit": EditDay
	};

	let palettes = testPalettes.reduce((palettes, palette) => {
		palettes[palette.name] = palette;
		return palettes;
	},{});
	let selectedPalette = testPalettes[0].name;
	$: palette = palettes[selectedPalette];

	let view = "grids";
	let editDay = "";

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
	{#each Object.keys(palettes) as p}
		<label><input type="radio" bind:group={selectedPalette} value={p}>{p}</label>
	{/each}
</heading>
<main>
	<Router {routes}/>
	<div id="#grids">
		{#each $daysDescending as day}
			<section>
				<h1>{toIsoDate(day.startTime)}</h1>
				<DayGlance blocks={day.purposes} {palette}/>
			</section>
		{/each}
	</div>
	<!-- {#if view === "overview"}
		{#each $daysWithData as date}
			<DayGlance blocks={$days[date].purposes} {palette}/>
		{/each}
	{:else if view === "grids"}
		<div id="grids">
			{#each $daysWithData as date}
				<section>
					<h1>{date}</h1>
					<div class="day">
						<button on:click={() => viewAll(date)}>‹</button>
						<DayGrid blocks={$days[date].purposes} {palette}/>
						<button on:click={() => edit(date)}>›</button>
					</div>
				</section>
			{/each}
		</div>
	{:else if view === "editor"}
		<DayEditor bind:day={$days[editDay]} {palette}/>
	{/if} -->
</main>