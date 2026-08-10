const scanner = require("prompt-sync")();

const income = Number(scanner("Enter annual income: "));

if (income < 30000) {
    console.log("Low");
} else if (income >= 30000 && income <= 100000) {
    console.log("Middle");
} else if (income > 100000) {
    console.log("High");
} else {
    console.log("Invalid input");
}
