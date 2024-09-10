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
