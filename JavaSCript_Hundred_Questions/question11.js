const scanner = require("prompt-sync")();

const ageNumber = Number(scanner("Enter an age: "));


if (ageNumber < 0) {
    console.log("Invalid, Enter a valid number");
} else if (ageNumber <= 12) {
    console.log("child");
} else if (ageNumber >= 13 && ageNumber <= 19) {
    console.log("Teen");
} else if (ageNumber >= 20 && ageNumber <= 59) { 
    console.log("Adult");
} else if (ageNumber >= 60) {
    console.log("Senior");
} else {
    console.log("Invalid, Enter a valid number");
}

