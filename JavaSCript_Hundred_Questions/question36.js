const scanner = require("prompt-sync")();

const number = Number(scanner("Enter a number: "));

if (number === 0 || number === 1 || number === 64 || number === 729) {
    console.log("Both");
} else if (number === 4 || number === 9 || number === 16 || number === 25 || number === 36 || number === 49 || number === 81 || number === 100) {
    console.log("Square");
} else if (number === 8 || number === 27 || number === 125 || number === 216) {
    console.log("Cube");
} else {
    console.log("Neither");
}
