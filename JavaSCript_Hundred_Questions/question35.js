const scanner = require("prompt-sync")();

const score = Number(scanner("Enter test score: "));

if (score >= 90) {
    console.log("Excellent");
} else if (score >= 80 && score <= 89) {
    console.log("Good");
} else if (score >= 70 && score <= 79) {
    console.log("Fair");
} else if (score >= 60 && score <= 69) {
    console.log("Poor");
} else if (score < 60) {
    console.log("Fail");
} else {
    console.log("Invalid input");
}
