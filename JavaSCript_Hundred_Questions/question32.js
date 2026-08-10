const scanner = require("prompt-sync")();

const value = Number(scanner("Enter a number (0-100): "));

if (value >= 0 && value <= 30) {
    console.log("Low Risk");
} else if (value >= 31 && value <= 70) {
    console.log("Medium Risk");
} else if (value >= 71 && value <= 100) {
    console.log("High Risk");
} else {
    console.log("Invalid input");
}
