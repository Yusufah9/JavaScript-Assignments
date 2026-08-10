const scanner = require("prompt-sync")();

const grade = scanner("Enter a grade letter (A-F): ").toUpperCase();

if (grade === "A" || grade === "B" || grade === "C" || grade === "D") {
    console.log("Pass");
} else if (grade === "F") {
    console.log("Fail");
} else {
    console.log("Invalid");
}
