<script>
	import TimeBlock from "./TimeBlock.svelte"
	let blocks = [
		{time: "00:00", purpose: "reading docs"},
		{time: "00:10", purpose: "writing code"},
		{time: "00:20", purpose: "debugging"},
		{time: "00:30", purpose: "resting"}
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
		<TimeBlock {...block} {colors}/>
	{/each}
</div>
