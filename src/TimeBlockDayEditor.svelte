<script>
    import TimeBlockEditor from "./TimeBlockEditor.svelte";
    export let blocks = [];
    export let palette = [];
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
	{#each blocks as {time, purpose}}
		<TimeBlockEditor {time} bind:purpose colors={palette}/>
	{/each}
</div>
