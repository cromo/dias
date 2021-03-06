export function pickSwatch(palette, str) {
    const matches = palette.swatches
        .map(({color: c, pattern: p}) => ({color: c, match: str.match(p)}))
        .filter(x => x.match);
    matches.sort((a, b) => a.match.index - b.match.index);
    return matches[0] && matches[0].color;
}

export const makeSwatch = (name, color, pattern) => ({name, color, pattern});
export const makePalette = (name, swatches) => ({name, swatches});
export const compilePalette = ({name, swatches}) => ({
    name,
    swatches: swatches.map(({name, color, pattern}) => ({
        name,
        color,
        pattern: regexFromString(pattern)
    }))
});

function regexFromString(s) {
    // See if the string is formatted like a regex literal.
    const match = s.match(/^\/(.*)\/([imsu]*)$/);
    if (!match) {
        // Interpret the string as matching individual literal words. This means
        // escaping all special characters and sticking a word boundary marker
        // on each word.
        const literalWords = s.trim()
            .split(/\s+/)
            .map(word => escapeRegex(word)
                .replace(/^|$/g, "\\b"))
            .join("|");
        return new RegExp(literalWords);
    }
    const [, pattern, flags] = match;
    try {
        return new RegExp(pattern, flags);
    } catch {
        return new RegExp(escapeRegex(s));
    }
}

function escapeRegex(s) {
    return s.replace(/[\\^$*+?.()|{}[\]]/g, "\\$&");
}