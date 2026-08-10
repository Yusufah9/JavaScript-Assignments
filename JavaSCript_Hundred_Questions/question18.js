const scanner = require("prompt-sync")();

const num1 = Number(scanner("Enter first number: "));
const num2 = Number(scanner("Enter second number: "));

if (num1 < num2) {
    console.log("increasing");
} else if (num1 > num2) {
    console.log("decreasing");
} else if (num1 === num2) {
    console.log("equal");
} else {
    console.log("Invalid input");
}
