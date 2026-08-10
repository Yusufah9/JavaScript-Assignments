const scanner = require("prompt-sync")();

const number1 = scanner("Enter first boolean (true/false): ").toLowerCase();
const number2 = scanner("Enter second boolean (true/false): ").toLowerCase();
const number3 = scanner("Enter third boolean (true/false): ").toLowerCase();

const boolean1 = (number1 === "true" || number1 === "yes" || number1 === "y");
const boolean2 = (number2 === "true" || number2 === "yes" || number2 === "y");
const boolean3 = (number3 === "true" || number3 === "yes" || number3 === "y");

if (boolean1 && boolean2 && !boolean3) {
    console.log("true");
} else if (boolean1 && !boolean2 && boolean3) {
    console.log("true");
} else if (!boolean1 && boolean2 && boolean3) {
    console.log("true");
} else {
    console.log("false");
}
