const scanner = require("prompt-sync")();

const num = Number(scanner("Enter a number (1-30): "));

if (num <= 0 || num % 1 !== 0) {
    console.log("Invalid input");
} else if (num === 6 || num === 28) {
    // The only perfect numbers under 400
    console.log("perfect");
} else if (num === 12 || num === 18 || num === 20 || num === 24 || num === 30) {
    
    console.log("abundant");
} else {
    console.log("deficient");
}
