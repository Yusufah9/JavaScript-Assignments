const scanner = require("prompt-sync")();

const firstNumber = Number(scanner("Enter the first number: "));
const secondNumber = Number(scanner("Enter the second number: "));
const thirdNumber = Number(scanner("Enter the third number: "));

if (firstNumber === 0 || secondNumber === 0 || thirdNumber === 0) {
    console.log("0 (Product is zero)");
} else {
  
    let negativeCount = 0;

    if (firstNumber < 0) {
        negativeCount++;
    }
    if (secondNumber < 0) {
        negativeCount++;
    }
    if (thirdNumber < 0) {
        negativeCount++;
    }

    if (negativeCount % 2 !== 0) {
        console.log("-");
    } else {
        console.log("+");
    }
}

