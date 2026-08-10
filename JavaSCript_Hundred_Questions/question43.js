const scanner = require("prompt-sync")();

const hour = Number(scanner("Enter hour in 24-hour format (0-23): "));

if (hour >= 5 && hour <= 11) {
    console.log("Morning");
} else if (hour >= 12 && hour <= 16) {
    console.log("Afternoon");
} else if (hour >= 17 && hour <= 20) {
    console.log("Evening");
} else if ((hour >= 21 && hour <= 23) || (hour >= 0 && hour <= 4)) {
    console.log("Night");
} else {
    console.log("Invalid hour");
}
