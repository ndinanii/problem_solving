/**
 * Absolute Difference Calculator
 * 
 * This function calculates the absolute difference between two numbers.
 * It handles undefined inputs and returns the positive difference regardless
 * of which number is larger.
 */

function absoluteDifference(num1, num2) {
    // Validate that both parameters are provided
    if (num1 === undefined || num2 === undefined) {
        return "Please provide two numbers.";
    }
    
    // Compare numbers and subtract smaller from larger
    if (num1 > num2) {
        return num1 - num2;
    }
    if (num2 > num1) {
        return num2 - num1;
    }
    
    // If both numbers are equal, difference is 0
    return 0;
}

// Alternative: Using Math.abs() for a quicker solution
function absoluteDifferenceQuick(num1, num2) {
    if (num1 === undefined || num2 === undefined) {
        return "Please provide two numbers.";
    }
    // Math.abs() automatically returns the absolute (positive) value
    return Math.abs(num1 - num2);
}

// Test cases
console.log(absoluteDifference(10, 10));      // Expected: 0
console.log(absoluteDifference(5, 15));       // Expected: 10
console.log(absoluteDifferenceQuick(2, 8));   // Expected: 6
