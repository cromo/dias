<script>
	import TimeBlock from "./TimeBlock.svelte"
	const now = new Date();
	let blocks = [
		{time: now, purpose: "reading docs"},
		{time: new Date(+now + 10 * 60 * 1000), purpose: "writing code"},
		{time: new Date(+now + 20 * 60 * 1000), purpose: "debugging"},
		{time: new Date(+now + 30 * 60 * 1000), purpose: "resting"},
		{time: new Date(+now + 40 * 60 * 1000), purpose: "nothing"},
	];
	let colors = [
		{color: "blue", pattern: /read/i},
		{color: "green", pattern: /writ/i},
		{color: "red", pattern: /debug/i},
		{color: "orange", pattern: /hn|hacker news/i},
		{color: "gray", pattern: /work/i},
		{color: "red", pattern: /youtube|netflix/i},
		{color: "yellow", pattern: /shopping|amazon/i},
		{color: "navy", pattern: /sleep|nap|rest/i},
	];
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
		<TimeBlock {time} bind:purpose {colors}/>
	{/each}
</div>
