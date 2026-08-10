const scanner = require("prompt-sync")();

const num = Number(scanner("Enter a number (0-20): "));

if (num === 0 || num === 1) {
    console.log("neither");
} else if (num < 0 || num % 1 !== 0) {
    console.log("Invalid input");
} else if (num === 2 || num === 3 || num === 5 || num === 7 || num === 11 || num === 13 || num === 17 || num === 19) {
    console.log("prime");
} else {
    console.log("composite");
}
