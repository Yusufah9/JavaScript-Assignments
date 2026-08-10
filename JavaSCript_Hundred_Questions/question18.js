const scanner = require("prompt-sync")();

const number1 = Number(scanner("Enter first number: "));
const number2 = Number(scanner("Enter second number: "));

if (number1 < number2) {
    console.log("increasing");
} else if (number1 > number2) {
    console.log("decreasing");
} else if (number1 === number2) {
    console.log("equal");
} else {
    console.log("Invalid input");
}
