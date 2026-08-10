const scanner = require("prompt-sync")();

const age = Number(scanner("Enter age: "));

if (age >= 0 && age <= 1) {
    console.log("Infant");
} else if (age >= 2 && age <= 3) {
    console.log("Toddler");
} else if (age >= 4 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teen");
} else if (age >= 20 && age <= 59) {
    console.log("Adult");
} else if (age >= 60) {
    console.log("Senior");
} else {
    console.log("Invalid input");
}
