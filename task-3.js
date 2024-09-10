
function checkDigitsInName(name) {
    if (typeof name !== "string" ) {
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
const userName = checkDigitsInName("rakib");
console.log(userName);