const scanner = require("prompt-sync")();

const firstNumber = Number(scanner("Enter the first number: "));
const secondNumber = Number(scanner("Enter the second number: "));
const thirdNumber = Number(scanner("Enter the third number: "));

let max = firstNumber;

if (secondNumber > max) {
    max = secondNumber;
}

if (thirdNumber > max) {
    max = thirdNumber;
}

console.log("The largest number is: " + max);

