<script>
	import localforage from "localforage";
	import { days, palettes, sortedPalettes, palette } from "./stores";
	import Router from "svelte-spa-router";
	import EditDay from "./routes/EditDay.svelte";
	import Home from "./routes/Home.svelte";
	import Overview from "./routes/Overview.svelte";
	import EditPalette from "./routes/EditPalette.svelte";

	localforage.getItem("days")
		.then(savedDays => {
			if (savedDays) {
				$days = savedDays;
			}
		})
		.catch(console.error);
	$: localforage.setItem("days", $days)
		.catch(console.error);

	const routes = {
		"/": Home,
		"/overview": Overview,
		"/edit/:date": EditDay,
		"/palette/:name": EditPalette
	};

	let selectedPalette = "";
	$: if ($palettes[selectedPalette]) {
		$palette = $palettes[selectedPalette];
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
</style>

<heading>
	<a href="#/palette/new">+</a>
	{#each $sortedPalettes as p}
		<label><input type="radio" bind:group={selectedPalette} value={p.name}>{p.name}</label>
	{/each}
	<a href="#/palette/{encodeURIComponent(selectedPalette)}">🖉</a>
</heading>
<main>
	<Router {routes}/>
</main>