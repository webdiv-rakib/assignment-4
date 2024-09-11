function calculateTax(income, expenses) {
    if (income <= 0 || expenses <= 0 || expenses > income) {
        const invalidMsg = "Invalid Input";
        return invalidMsg;
    }
    else {
        const profit = income - expenses;
        const tax = profit * 0.20;
        return tax;
    }
}

function sendNotification(email) {
    if (email.includes("@") === true) {
        const address = email.split('@');
        const userName = address[0];
        const domainName = address[1];
        const notification = userName + " sent you an email from " + domainName;
        return notification;
    }
    else {
        const invalidMsg = "Invalid Email";
        return invalidMsg;
    }
}

function checkDigitsInName(name) {
    if (typeof name !== "string") {
        const invalidMsg = "Invalid Input";
        return invalidMsg;
    }
    if (name.includes("0") === true || name.includes("1") === true || name.includes("2") === true || name.includes("3") === true || name.includes("4") === true || name.includes("5") === true || name.includes("6") === true || name.includes("7") === true || name.includes("8") === true || name.includes("9") === true) {
        return true;
    }
    else {
        return false;
    }
}

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