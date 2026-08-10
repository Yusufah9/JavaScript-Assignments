const scanner = require("prompt-sync")();

const a = Number(scanner("Enter first side: "));
const b = Number(scanner("Enter second side: "));
const c = Number(scanner("Enter third side: "));

// Check if any of the three sides could be the hypotenuse
if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
    console.log("Right Triangle");
} else {
    console.log("Not Right");
}
