export function pickSwatch(palette, str) {
    const matches = palette.swatches
        .map(({color: c, pattern: p}) => ({color: c, match: str.match(p)}))
        .filter(x => x.match);
    matches.sort((a, b) => a.match.index - b.match.index);
    return matches[0] && matches[0].color;
}

export const makeSwatch = (name, color, pattern) => ({name, color, pattern});
export const makePalette = (name, swatches) => ({name, swatches});

export const testPalettes = [
    makePalette("Creative", [
        makeSwatch("reading", "#1df", /read/i),
        makeSwatch("writing", "green", /writ/i),
        makeSwatch("debugging", "red", /debug/i),
        makeSwatch("hacker news", "orange", /hn|hacker news/i),
        makeSwatch("streaming", "red", /youtube|netflix/i),
        makeSwatch("shopping", "yellow", /shopping|amazon/i),
        makeSwatch("working", "gray", /work/i),
        makeSwatch("sleeping", "navy", /sleep|nap|rest/i),
    ]),
    makePalette("HN vs. Work", [
        makeSwatch("Hacker News", "orange", /hn|hacker news|article/i),
        makeSwatch("Work", "green", /work|code|debug|write/i),
    ])
];