const scanner = require("prompt-sync")();

const num = Number(scanner("Enter a number: "));

if (num === 0) {
    console.log("Zero");
} else if (num > 0 && num % 2 === 0) {
    console.log("Positive Even");
} else if (num > 0 && num % 2 !== 0) {
    console.log("Positive Odd");
} else if (num < 0 && num % 2 === 0) {
    console.log("Negative Even");
} else if (num < 0 && num % 2 !== 0) {
    console.log("Negative Odd");
} else {
    console.log("Invalid input");
}
