const scanner = require("prompt-sync")();

const hours = Number(scanner("Enter hours worked: "));
const rate = Number(scanner("Enter hourly rate: "));

if (hours <= 40) {
    const totalPay = hours * rate;
    console.log(totalPay);
} else if (hours > 40) {
    const regularPay = 40 * rate;
    const overtimeHours = hours - 40;
    const overtimePay = overtimeHours * rate * 1.5;
    const totalPay = regularPay + overtimePay;
    console.log(totalPay);
} else {
    console.log("Invalid input");
}
