/**
 * First Element Finder
 * 
 * Looks through an array and returns the first element that passes a truth test (test function).
 * Returns undefined if no element passes the test.
 */

function findElement(arr, test) {
    // Iterate through each element in the array
    for (let element of arr) {
        // Test if the current element passes the test function
        if (test(element)) {
            // Return the first element that passes
            return element;
        }
    }
    
    // If no element passes, return undefined
    return undefined;
}

// Test cases with different test functions

// Example 1: Find first even number
console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));
// Expected: 8 (first even number)

// Example 2: Find first number greater than 10
console.log(findElement([1, 3, 5, 9], num => num > 10));
// Expected: undefined (no number > 10)

// Example 3: Find first number divisible by 3
console.log(findElement([1, 2, 3, 4, 5, 6], num => num % 3 === 0));
// Expected: 3

// Example 4: Find first negative number
console.log(findElement([5, 10, -3, 4, -8], num => num < 0));
// Expected: -3
