const readline = require("readline-sync");

const num1 = readline.question("\nPlease enter a number\n");
const num2 = readline.question("\nPlease enter another number\n");
const operations = [ "add", "subtract", "divide", "multiply"];

index = readline.keyInSelect(operations, "\nWhich operation?\n");
console.log(operations[index]);
let result;
if (operations[index] === "add") {
    result = add(num1, num2);
} else if (operations[index] === "subtract") {
    result = subtract(num1, num2);
} else if (operations[index] === "multiply") {
    result = multiply(num1, num2);
} else if (operations[index] === "divide") {
    result = divide(num1, num2);
}
console.log(result);

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}