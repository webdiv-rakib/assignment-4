function calculateFinalScore(obj) {
    if (typeof obj === 'object' && Array.isArray(obj) !== true) {
        let totalScore = 0;

        totalScore = obj.testScore + obj.schoolGrade;

        if (obj.isFFamily === true) {
            totalScore += 20;
        }

        if (totalScore >= 80) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        const invalidMsg = "Invalid Input";
        return invalidMsg;
    }
}

const sampleInput = { name: "Rajib", testScore: 15, schoolGrade: 25,
    isFFamily : true }

console.log(calculateFinalScore(sampleInput));
