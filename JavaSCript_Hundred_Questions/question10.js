const scanner = require("prompt-sync")();

const firstNumber = Number(scanner("Enter the first number: "));
const secondNumber = Number(scanner("Enter the second number: "));

function checkSumSign(num1, num2) {
    const sum = num1 + num2;

    if (sum > 0) {
        return "positive";
    } else if (sum < 0) {
        return "negative";
    } else {
        return "zero";
    }
}

const result = checkSumSign(firstNumber, secondNumber);

console.log(result);

