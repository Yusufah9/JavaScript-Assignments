const scanner = require("prompt-sync")();

const systolic = Number(scanner("Enter systolic pressure (top number): "));
const diastolic = Number(scanner("Enter diastolic pressure (bottom number): "));

if (systolic >= 180 || diastolic >= 120) {
    console.log("Crisis");
} else if ((systolic >= 130 && systolic <= 179) || (diastolic >= 80 && diastolic <= 119)) {
    console.log("High");
} else if ((systolic >= 120 && systolic <= 129) && diastolic < 80) {
    console.log("Elevated");
} else if (systolic < 120 && diastolic < 80) {
    console.log("Normal");
} else {
    console.log("Invalid input");
}
