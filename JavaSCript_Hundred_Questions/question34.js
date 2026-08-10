const scanner = require("prompt-sync")();

const speed = Number(scanner("Enter speed in km/h: "));

if (speed <= 60) {
    console.log("Normal");
} else if (speed >= 61 && speed <= 100) {
    console.log("Fast");
} else if (speed > 100) {
    console.log("Speeding");
} else {
    console.log("Invalid input");
}
