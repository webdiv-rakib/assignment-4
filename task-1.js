/*function signature/sample */


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

const totalTax = calculateTax(5000, 7500);
console.log(totalTax);