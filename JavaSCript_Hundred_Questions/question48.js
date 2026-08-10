const scanner = require("prompt-sync")();

const text = scanner("Enter a string: ");

let hasLetters = false;
let hasNumbers = false;
let hasSpecial = false;

if (text.length === 0) {
    console.log("Invalid");
} else {

    const lowerText = text.toLowerCase();
    
    if (Number(text) >= 0 || Number(text) < 0) {
        console.log("Numeric");
    } 
    
    else if (lowerText >= "a" && lowerText <= "z") {
        console.log("Alphabetic");
    } 
    
    else if ((lowerText.includes("a") || lowerText.includes("b") || lowerText.includes("e")) && (text.includes("1") || text.includes("2") || text.includes("0"))) {
        console.log("Alphanumeric");
    } 
    
    else {
        console.log("Special Characters");
    }
}
