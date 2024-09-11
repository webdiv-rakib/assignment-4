function waitingTime(waitingTimes, serialNumber) {

    if (Array.isArray(waitingTimes) !== true || typeof serialNumber !== 'number') {
        const invalidMsg = "Invalid Input"
        return invalidMsg;
    }
    else {
        let sum = 0;
        for (let i = 0; i < waitingTimes.length; i++) {
            sum += waitingTimes[i];
        }
        const avg = Math.round(sum / waitingTimes.length);
        const peopleLeft = serialNumber - 1 - waitingTimes.length;
        const needToWait = avg * peopleLeft;
        return needToWait;
    }
}
console.log(waitingTime([13, 2, 6, 7, 10], 6));
