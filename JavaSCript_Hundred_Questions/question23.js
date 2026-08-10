const scanner = require("prompt-sync")();

const attendance = Number(scanner("Enter attendance percentage: "));
const score = Number(scanner("Enter average score: "));

if (attendance >= 75 && score >= 75) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}
