/**
 * Truncate String Algorithm
 * 
 * Truncates a string to a specified length and adds "..." if it was truncated.
 * If the string is already shorter than or equal to the specified length,
 * returns the original string unchanged.
 */

function truncateString(str, num) {
    // If string length exceeds the limit
    if (str.length > num) {
        // Slice the string to the specified length and add "..."
        const truncatedString = str.slice(0, num) + "...";
        return truncatedString;
    }
    
    // If string length is within the limit, return as is
    if (str.length <= num) {
        return str;
    }
}

// Test cases
let str = "A-tisket a-tasket A green and yellow basket";
let num = 8;

console.log(truncateString(str, num));  // "A-tisket..."
console.log(truncateString("Hello World", 20));  // "Hello World" (unchanged)
console.log(truncateString("JavaScript", 4));    // "Java..."
