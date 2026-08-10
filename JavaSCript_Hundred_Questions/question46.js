const scanner = require("prompt-sync")();

const items = Number(scanner("Enter the number of items: "));

if (items >= 50) {
    console.log("Bulk");
} else if (items >= 10 && items <= 49) {
    console.log("Standard");
} else if (items === 1) {
    console.log("Single");
} else if (items > 1 && items < 10) {
    console.log("Few");
} else {
    console.log("Invalid input");
}
