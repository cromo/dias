<script>
	import localforage from "localforage";
	import {
		days,
		rawPalettes,
		palettes,
		sortedPalettes,
		palette
		} from "./stores";
	import Router from "svelte-spa-router";
	import { location, pop } from "svelte-spa-router";
	import EditDay from "./routes/EditDay.svelte";
	import Home from "./routes/Home.svelte";
	import Overview from "./routes/Overview.svelte";
	import EditPalette from "./routes/EditPalette.svelte";

	localforage.getItem("days")
		.then(savedDays => {
			if (savedDays) {
				$days = savedDays;
			}
		}).catch(console.error);
	$: localforage.setItem("days", $days)
		.catch(console.error);
	localforage.getItem("palettes")
		.then(savedPalettes => {
			if (savedPalettes) {
				$rawPalettes = savedPalettes;
			}
		}).catch(console.error);
	$: localforage.setItem("palettes", $rawPalettes)
		.catch(console.error);

	const routes = {
		"/": Home,
		"/overview": Overview,
		"/edit/:date": EditDay,
		"/palette/:index": EditPalette
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
		background: white;
		display: flex;
		align-items: baseline;
	}

	heading > .spreader {
		flex-grow: 1;
	}

	heading > * + * {
		margin-left: 1.04em;
	}

	main {
		margin-top: 4.5em;
	}
</style>

<heading>
	{#if $location !== "/"}
		<button on:click={pop}>‹</button>
	{/if}
	<span>Do It And See</span>
	<span class=spreader></span>
	<a href="#/palette/new">+</a>
	<select name="palette" bind:value={selectedPalette}>
		{#each $sortedPalettes as p}
			<option value={p.name}>{p.name}</option>
		{/each}
	</select>
	<a href="#/palette/{$palette.index}">🖉</a>
</heading>
<main>
	<Router {routes}/>
</main>