let num1;
let num2;

function absoluteDifference(num1, num2) {
    if (num1 === undefined || num2 === undefined) {
        return "Please provide two numbers.";
    }
    if (num1 > num2) {
        return num1 - num2;
    }
    if (num2 > num1) {
        return num2 - num1;
    }
    return 0; // If both numbers are equal
}
console.log(absoluteDifference(10, 10));