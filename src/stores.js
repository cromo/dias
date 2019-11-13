import { writable, derived } from "svelte/store";
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