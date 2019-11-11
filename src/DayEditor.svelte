<script>
    import TimeBlockEditor from "./TimeBlockEditor.svelte";
    export let day = {};
    export let palette = [];
    let times = [];
    $: times = day.purposes.map((_, i) => new Date(+day.startTime + i * 10 * 60 * 1000));
</script>

<style>
	.grid {
		display: grid;
		grid-template-columns: 40px 40px 1fr;
		grid-gap: 4px 4px;
		align-items: center;
	}
</style>

<div class=grid>
	{#each day.purposes as purpose, i}
		<TimeBlockEditor time={times[i]} bind:purpose colors={palette}/>
	{/each}
</div>
