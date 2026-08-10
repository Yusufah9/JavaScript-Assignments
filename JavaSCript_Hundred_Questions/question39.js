const scanner = require("prompt-sync")();

const text = scanner("Enter a word: ");

if (text === text.toUpperCase() && text !== text.toLowerCase()) {
    console.log("Uppercase");
} else if (text === text.toLowerCase() && text !== text.toUpperCase()) {
    console.log("Lowercase");
} else if (text !== text.toUpperCase() && text !== text.toLowerCase()) {
    console.log("Mixed");
} else {
    console.log("Not Alphabetic");
}


