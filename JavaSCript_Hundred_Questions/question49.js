const scanner = require("prompt-sync")();
const number = Number(scanner("Enter a number: "));


if (number === 2) {
    console.log("Prime and Even");
} else if (number === 3) {
    console.log("Prime and Odd");
} 

else if (number % 2 === 0 && number > 2) {
    console.log("Composite and Even");
} else if (number % 3 === 0 && number > 3) {
    console.log("Composite and Odd");
} 

else if (number <= 1) {
    console.log("Neither");
} else {
    if (number % 2 === 0) {
        console.log("Composite and Even");
    } else {
        console.log("Prime and Odd");
    }
}
