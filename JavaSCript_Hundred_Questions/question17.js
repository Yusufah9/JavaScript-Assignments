const scanner = require("prompt-sync")();

let number = Number(scanner("Enter a number: "));

if (number < 0) {
    number = number * -1;
}

if (number >= 0 && number <= 9) {
    console.log("single-digit");
} else if (number >= 10 && number <= 99) {
    console.log("double-digit");
} else if (number >= 100 && number <= 999) {
    console.log("triple-digit");
} else if (number >= 1000) {
    console.log("larger");
} else {
    console.log("Invalid input");
}
