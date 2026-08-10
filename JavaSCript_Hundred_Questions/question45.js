const scanner = require("prompt-sync")();
const firstNumber = Number(scanner("Enter the first number: ")); 
const secondNumber = Number(scanner("Enter the second number: ")); 

if (firstNumber === 0 || secondNumber === 0) {
    console.log("One is Zero");

} else if ((firstNumber > 0 && secondNumber > 0) || (firstNumber < 0 && secondNumber < 0)) {
    console.log("Same Sign");

} else {
    console.log("Opposite Signs");
}

