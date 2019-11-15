import { writable, derived, readable } from "svelte/store";
import { makePalette, makeSwatch, compilePalette } from "./palette";

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

export const rawPalettes = writable([
    makePalette("Creative", [
        makeSwatch("reading", "#1df", "/read/i"),
        makeSwatch("writing", "green", "/writ/i"),
        makeSwatch("debugging", "red", "/debug/i"),
        makeSwatch("hacker news", "orange", "/hn|hacker news/i"),
        makeSwatch("streaming", "red", "/youtube|netflix/i"),
        makeSwatch("shopping", "yellow", "/shopping|amazon/i"),
        makeSwatch("working", "gray", "/work/i"),
        makeSwatch("sleeping", "navy", "/sleep|nap|rest/i"),
    ]),
    makePalette("HN vs. Work", [
        makeSwatch("Hacker News", "orange", "/hn|hacker news|article/i"),
        makeSwatch("Work", "green", "/work|code|debug|write/i"),
    ])
]);

export const palettes = derived(
    rawPalettes,
    $rawPalettes => $rawPalettes.map((palette, i) => {
            palette = compilePalette(palette);
            palette.index = i;
            return palette;
        })
);

// Provides an array of the palettes sorted by name, primarily for display
// purposes.
export const sortedPalettes = derived(
    palettes,
    $palettes => {
        const sortedByName = [...$palettes];
        sortedByName.sort((a, b) => {
            const nameA = a.name.toLocaleLowerCase();
            const nameB = b.name.toLocaleLowerCase();
            return nameA < nameB ? -1 :
                nameB < nameA ? 1 :
                0;
        });
        return sortedByName;
    }
);

export const palette = writable(makePalette("None", []));

export const now = readable(new Date(), set => {
    const interval = setInterval(() => set(new Date()), 1000);
    return () => clearInterval(interval);
});