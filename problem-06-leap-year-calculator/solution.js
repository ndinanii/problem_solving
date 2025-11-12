/**
 * Leap Year Calculator
 * 
 * Determines if a given year is a leap year according to the Gregorian calendar rules:
 * - A year is a leap year if it's divisible by 4
 * - EXCEPT if it's divisible by 100 (then it's not a leap year)
 * - EXCEPT if it's also divisible by 400 (then it IS a leap year)
 */

function isLeapYear(year) {
    // Check the leap year conditions:
    // 1. Divisible by 4 AND not divisible by 100, OR
    // 2. Divisible by 400
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

// Test cases
let year = 2024;
let result = isLeapYear(year);
console.log(result);  // 2024 is a leap year

// Additional test cases
console.log(isLeapYear(2000));  // 2000 is a leap year (divisible by 400)
console.log(isLeapYear(1900));  // 1900 is not a leap year (divisible by 100 but not 400)
console.log(isLeapYear(2023));  // 2023 is not a leap year (not divisible by 4)
