const scanner = require("prompt-sync")();

const numberString = scanner("Enter a number: ");

if (numStr.length === 1) {
    console.log("Palindrome");
} else if (numberString.length === 2 && numberString.charAt(0) === numberString.charAt(1)) {
    console.log("Palindrome");
} else if (numberString.length === 3 && numberString.charAt(0) === numberString.charAt(2)) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}
