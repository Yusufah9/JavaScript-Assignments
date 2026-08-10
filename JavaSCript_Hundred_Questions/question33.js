const scanner = require("prompt-sync")();

const role = scanner("Enter job role: ");
const years = Number(scanner("Enter years of experience: "));

if (years < 2) {
    console.log("Junior");
} else if (years >= 2 && years <= 5) {
    console.log("Mid-Level");
} else if (years > 5) {
    console.log("Senior");
} else {
    console.log("Invalid input");
}
