export function newDay(startTime) {
    startTime = startTime ? new Date(startTime) : new Date();
    return {startTime, purposes: new Array(100).fill("")};
}

// Shuffle around the existing purposes within the day so that the new block
// that overlaps the most with the original block takes it's purpose. E.g. When
// changing startTime from 6:00 to 6:04, the purpose at 7:00 gets assigned to
// 7:04; if it went to 6:07 instead, it would get assigned to 6:57 instead.
// This is equivalent to translating the times in the old day into block
// indexes in the new day and rounding, then padding either side to make it 100
// blocks again.
export function adjustStartTime(newStartTime, day) {
    const millisecondDelta = +newStartTime - day.startTime;
    const blockDelta = Math.round(millisecondDelta / (10 * 60 * 1000));
    const fillAtBeginning = blockDelta < 0;

    const blankPurposes = new Array(Math.abs(blockDelta)).fill("");
    const overlappingPurposes = fillAtBeginning ?
        day.purposes.slice(0, blockDelta) :
        day.purposes.slice(blockDelta);
    const newPurposes = fillAtBeginning ?
        [...blankPurposes, ...overlappingPurposes] :
        [...overlappingPurposes, ...blankPurposes];
    return {startTime: newStartTime, purposes: newPurposes};
}