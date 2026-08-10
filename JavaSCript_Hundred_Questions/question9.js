const scanner = require("prompt-sync")();

const age = Number(scanner("Enter your age: "));
const hasVoterCard = scanner("Do you have a voter's card? (yes/no): ").toLowerCase();
const isCitizen = scanner("Are you a citizen? (yes/no): ").toLowerCase();

const voterCardValid = (hasVoterCard === "yes" || hasVoterCard === "y");
const citizenValid = (isCitizen === "yes" || isCitizen === "y");


if (age >= 18 && voterCardValid && citizenValid) {
    console.log("true");
} else {
    console.log("false");
}

