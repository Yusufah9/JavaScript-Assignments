const scanner = require("prompt-sync")();

const attempts = Number(scanner("Enter login attempts: "));

if (attempts >= 3) {
    console.log("Locked");
} else if (attempts === 2) {
    console.log("Warning");
} else if (attempts < 2) {
    console.log("Allowed");
} else {
    console.log("Invalid input");
}
