const scanner = require("prompt-sync")();

const num = Number(scanner("Enter a number: "));

if (num % 3 === 0 && num % 5 === 0) {
    console.log("Divisible by both");
} else if (num % 3 === 0) {
    console.log("Divisible by 3");
} else if (num % 5 === 0) {
    console.log("Divisible by 5");
} else {
    console.log("Not divisible");
}
