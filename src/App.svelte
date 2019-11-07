<script>
	import TimeBlock from "./TimeBlock.svelte"
	const now = new Date();
	let blocks = [
		{time: now, purpose: "reading docs"},
		{time: new Date(+now + 10 * 60 * 1000), purpose: "writing code"},
		{time: new Date(+now + 20 * 60 * 1000), purpose: "debugging"},
		{time: new Date(+now + 30 * 60 * 1000), purpose: "resting"}
	];
	let colors = {
		blue: /read/i,
		green: /writ/i,
		red: /debug/i,
		orange: /hn|hacker news/i,
		gray: /work/i,
		red: /youtube|netflix/i,
		yellow: /shopping|amazon/i,
		navy: /sleep|nap|rest/i
	};
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
	{#each blocks as block}
		<TimeBlock time={block.time} bind:purpose={block.purpose} {colors}/>
	{/each}
</div>
