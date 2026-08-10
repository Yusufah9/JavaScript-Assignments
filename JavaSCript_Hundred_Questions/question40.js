const scanner = require("prompt-sync")();

const number = Number(scanner("Enter a number: "));

if (number === 0) {
    console.log("Zero");
} else if (number >= 1 && number <= 9) {
    console.log("Single Digit Positive");
} else if (number <= -1 && number >= -9) {
    console.log("Single Digit Negative");
} else if (number  >= 10 || number <= -10) {
    console.log("Multi-Digit");
} else {
    console.log("Invalid input");
}
