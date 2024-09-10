let text = "nurealom@gmail.com";
const myArray = text.split("@");
const userName = myArray[0];
const domainName = myArray[1];
const msg = userName + " sent you an email from " + domainName;
// console.log(msg);

const num = "true";
console.log(typeof num === 'boolean');
