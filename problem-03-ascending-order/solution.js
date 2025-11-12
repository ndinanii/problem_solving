/**
 * Ascending Order Checker
 * 
 * Given three integers a, b, and c, return true if they are in ascending order.
 * Two equal numbers are considered to be in ascending order.
 */

function ascendingOrder(a, b, c) {
    // Check if a <= b AND b <= c
    // This ensures the numbers are in non-decreasing order
    return a <= b && b <= c;
}

// Test cases
console.log(ascendingOrder(1, 2, 3));    // Expected: true
console.log(ascendingOrder(1, 1, 2));    // Expected: true (equal numbers allowed)
console.log(ascendingOrder(3, 2, 1));    // Expected: false
console.log(ascendingOrder(5, 10, 10));  // Expected: true
console.log(ascendingOrder(5, 3, 7));    // Expected: false
