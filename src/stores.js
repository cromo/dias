import { writable, derived } from "svelte/store";
import { newDay } from "./day";
import { makePalette } from "./palette";

export const days = writable({
    "2019-11-10": newDay(),
    "2019-11-09": newDay()
});

days.update(days => {
    const randomActivity = () => ["hn", "read", "shopping", "youtube", "work", "", "", ""][Math.floor(Math.random() * 8)];
    days["2019-11-10"].purposes = days["2019-11-10"].purposes.map(randomActivity);
    days["2019-11-09"].purposes = days["2019-11-09"].purposes.map(randomActivity);
    return days;
});

export const daysDescending = derived(
    days,
    $days => {
        const daysWithData = Object.keys($days);
		daysWithData.sort();
		daysWithData.reverse();
		return daysWithData.map(date => $days[date]);
    }
);

export const palette = writable(makePalette("None", []));