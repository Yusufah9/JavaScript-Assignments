const scanner = require("prompt-sync")();
const sleepingHours = Number(scanner("Enter your sleeping hours: "));

if (sleepingHours < 6) {
    console.log("Too little");
} else if (sleepingHours >= 6 && sleepingHours <= 8) {
    console.log("Adequate sleeping");
} else {
    console.log("Too much");
}
