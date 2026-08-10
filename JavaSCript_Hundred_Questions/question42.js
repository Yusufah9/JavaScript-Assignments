const scanner = require("prompt-sync")();

const number = Number(scanner("Enter a 3-digit number: "));


const d1igit1 = Math.floor(num / 100);
const digit2 = Math.floor((num % 100) / 10);
const digit3 = number % 10;

if (digit1 < digit2 && digit2 < digit3) {
    console.log("Increasing Digits");
} else if (digit1 > digit2 && digit2 > digit3) {
    console.log("Decreasing Digits");
} else {
    console.log("Mixed");
}
