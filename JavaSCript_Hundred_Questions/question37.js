const scanner = require("prompt-sync")();

const number1 = Number(scanner("Enter first number: "));
const number2 = Number(scanner("Enter second number: "));

if (number1 % number2 === 0 || number2 % number1 === 0) {
    console.log("Multiples");
} else {
    console.log("Not Multiples");
}
