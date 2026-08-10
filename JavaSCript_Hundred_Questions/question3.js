const scanner = require("prompt-sync")();

const year = Number(scanner("Enter the number: "));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("true");
} else {
    console.log("False not a leap year");
}

