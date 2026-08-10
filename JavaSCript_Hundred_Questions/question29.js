const scanner = require("prompt-sync")();

const text = scanner("Enter a string: ");
const firstChar = text.charAt(0).toLowerCase();

if (firstChar === "a" || firstChar === "e" || firstChar === "i" || firstChar === "o" || firstChar === "u") {
    console.log("Vowel");
} else if (firstChar >= "a" && firstChar <= "z") {
    console.log("Consonant");
} else {
    console.log("Invalid");
}
