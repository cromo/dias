export function pickSwatch(palette, str) {
    const matches = palette
        .map(({color: c, pattern: p}) => ({color: c, match: str.match(p)}))
        .filter(x => x.match);
    matches.sort((a, b) => a.match.index - b.match.index);
    return matches[0] && matches[0].color;
}