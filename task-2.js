/*function signature/sample */
function sendNotification(email) {
    if (email.includes("@") === true) {
        const address = email.split('@');
        const userName = address[0];
        const domainName = address[1];
        const notification = userName + " sent you an email from " + domainName;
        return notification;
    }
    else {
        const invalidMsg = "Invalid Email"
        return invalidMsg;
    }
}

const noti = sendNotification("sadia8icloud.com");
console.log(noti);
