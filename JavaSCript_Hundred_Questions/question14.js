const scanner = require("prompt-sync")();

const text = scanner("Enter a string: ");
const length = text.length;

if (len < 5) {
    console.log("short");
} else if (len >= 5 && len <= 10) {
    console.log("medium");
} else if (len > 10) {
    console.log("long");
}
