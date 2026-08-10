const scanner = require("prompt-sync")();

const heightCm = Number(scanner("Enter height in cm: "));
const weightKg = Number(scanner("Enter weight in kg: "));

// Convert cm to meters
const heightM = heightCm / 100;
const bmi = weightKg / (heightM * heightM);

if (bmi < 18.5) {
    console.log("Underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Normal");
} else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Overweight");
} else if (bmi >= 30) {
    console.log("Obese");
} else {
    console.log("Invalid input");
}
