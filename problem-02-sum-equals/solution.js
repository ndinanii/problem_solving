/**
 * Sum Equals
 * 
 * This function checks if the sum of two numbers equals a third number.
 * Returns true if num1 + num2 === num3, otherwise false.
 */

function sumEquals(num1, num2, num3) {
    // Validate that all three parameters are provided
    if (num1 === undefined || num2 === undefined || num3 === undefined) {
        return "Please provide three numbers.";
    }
    
    // Check if the sum of first two numbers equals the third
    if (num1 + num2 === num3) {
        return true;
    } else {
        return false;
    }
}

// Test cases
console.log(sumEquals(2, 3, 5));  // Expected: true
console.log(sumEquals(1, 2, 4));  // Expected: false
console.log(sumEquals(10, 5, 15)); // Expected: true
