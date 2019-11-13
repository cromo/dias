<script>
	import { testPalettes } from "./palette";
	import { palette } from "./stores";
	import Router from "svelte-spa-router";
	import EditDay from "./routes/EditDay.svelte";
	import Home from "./routes/Home.svelte";
	import Overview from "./routes/Overview.svelte";

	const routes = {
		"/": Home,
		"/overview": Overview,
		"/edit/:date": EditDay
	};

	let palettes = testPalettes.reduce((palettes, palette) => {
		palettes[palette.name] = palette;
		return palettes;
	},{});
	let selectedPalette = testPalettes[0].name;
	$: $palette = palettes[selectedPalette];
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
	{#each Object.keys(palettes) as p}
		<label><input type="radio" bind:group={selectedPalette} value={p}>{p}</label>
	{/each}
</heading>
<main>
	<Router {routes}/>
</main>