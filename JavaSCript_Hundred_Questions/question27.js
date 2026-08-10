const scanner = require("prompt-sync")();

const balance = Number(scanner("Enter account balance: "));

if (balance < 100) {
    console.log("Low");
} else if (balance >= 100 && balance <= 1000) {
    console.log("Medium");
} else if (balance > 1000) {
    console.log("High");
} else {
    console.log("Invalid input");
}
