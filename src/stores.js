import { writable, derived, readable } from "svelte/store";
import { newDay } from "./day";
import { makePalette } from "./palette";

export const days = writable({});

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

export const now = readable(new Date(), set => {
    const interval = setInterval(() => set(new Date()), 1000);
    return () => clearInterval(interval);
});