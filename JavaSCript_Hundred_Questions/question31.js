const scanner = require("prompt-sync")();

const string1 = scanner("Enter first string: ");
const string2 = scanner("Enter second string: ");

if (string1.length === string2.length) {
    console.log("Same Length");
} else if (string1.length > string2.length) {
    console.log("First Longer");
} else {
    console.log("Second Longer");
}
