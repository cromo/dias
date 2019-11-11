export function newDay(startTime) {
    startTime = startTime ? new Date(startTime) : new Date();
    return {startTime, purposes: new Array(100).fill("")};
}