export function newDay(startTime) {
    startTime = startTime || Date.now();
    return {startTime, purposes: new Array(100).fill("")};
}