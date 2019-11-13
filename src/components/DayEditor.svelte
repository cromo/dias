<script>
    import { adjustStartTime } from "../day";
    import TimeBlockEditor from "./TimeBlockEditor.svelte";
    export let day = {};
    export let palette = [];
    let times = [];
	$: times = day.purposes.map((_, i) => new Date(+day.startTime + i * 10 * 60 * 1000));
	let startTime = `${day.startTime.getHours().toString().padStart(2, '0')}:${day.startTime.getMinutes().toString().padStart(2, '0')}`;

	function setNewStartTime() {
		const match = startTime.match(/0?(\d+):(\d+)/);
		if (!match) {
			console.error("Bad input start time");
			return;
		}
		const [, hours, minutes] = match;
		const newStart = new Date(day.startTime);
		newStart.setHours(+hours);
		newStart.setMinutes(+minutes);
		day = adjustStartTime(newStart, day);
	}
</script>

<style>
	.grid {
		display: grid;
		grid-template-columns: 40px 40px 1fr;
		grid-gap: 4px 4px;
		align-items: center;
	}
</style>

<input type=time bind:value={startTime}><button on:click={setNewStartTime}>Set Start Time</button>
<div class=grid>
	{#each day.purposes as purpose, i}
		<TimeBlockEditor time={times[i]} bind:purpose colors={palette}/>
	{/each}
</div>
