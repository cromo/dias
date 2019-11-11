<script>
	import { newDay, adjustStartTime } from "./day";
	import { makeSwatch, makePalette } from "./palette";
	import DayGlance from "./DayGlance.svelte";
	import DayGrid from "./DayGrid.svelte";
	import DayEditor from "./DayEditor.svelte";

	let palette = "creative";
	let startTime = "00:00";

	let day = newDay();
	startTime = `${day.startTime.getHours().toString().padStart(2, '0')}:${day.startTime.getMinutes().toString().padStart(2, '0')}`;
	let palettes = {
		creative: makePalette("Creative", [
			makeSwatch("reading", "#1df", /read/i),
			makeSwatch("writing", "green", /writ/i),
			makeSwatch("debugging", "red", /debug/i),
			makeSwatch("hacker news", "orange", /hn|hacker news/i),
			makeSwatch("streaming", "red", /youtube|netflix/i),
			makeSwatch("shopping", "yellow", /shopping|amazon/i),
			makeSwatch("working", "gray", /work/i),
			makeSwatch("sleeping", "navy", /sleep|nap|rest/i),
		]),
		hnVsWork: makePalette("HN vs. Work", [
			makeSwatch("Hacker News", "orange", /hn|hacker news|article/i),
			makeSwatch("Work", "green", /work|code|debug|write/i),
		])
	};

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

<DayGlance blocks={day.purposes} palette={palettes[palette]}/>
{#each Object.keys(palettes) as p}
<label>
	<input type="radio" bind:group={palette} value={p}>
	{p}
</label>
{/each}
<input type=time bind:value={startTime}><button on:click={setNewStartTime}>Set Start Time</button>
<DayGrid blocks={day.purposes} palette={palettes[palette]}/>
<DayEditor bind:day palette={palettes[palette]}/>