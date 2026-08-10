const scanner = require("prompt-sync")();

const celsius = Number(scanner("Enter a temperature in Celsius: "));

if (celsius < 0) {
    console.log("Freezing");
} else if (celsius >= 0 && celsius <= 15) {
    console.log("Cold");
} else if (celsius >= 16 && celsius <= 25) {
    console.log("Warm");
} else if (celsius > 25) {
    console.log("Hot");
} else {
    console.log("Invalid input");
}
