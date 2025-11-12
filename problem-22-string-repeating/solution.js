/**
 * String Repeating
 * 
 * Repeats a given string a specified number of times.
 * Returns an empty string if num is 0 or negative.
 */

function repeatStringNumTimes(str, num) {
    // Initialize empty result string
    let result = "";
    
    // If num is 0 or negative, return empty string
    if (num <= 0) {
        return "";
    }
    
    // Loop num times, adding str to result each iteration
    for (let i = 0; i < num; i++) {
        result += str;
    }
    
    return result;
}

// Alternative: Using built-in repeat() method
function repeatStringNumTimesBuiltIn(str, num) {
    if (num <= 0) {
        return "";
    }
    return str.repeat(num);
}

// Test cases
console.log(repeatStringNumTimes("abc", 3));        // "abcabcabc"
console.log(repeatStringNumTimes("*", 5));          // "*****"
console.log(repeatStringNumTimes("hello", 0));      // ""
console.log(repeatStringNumTimes("test", -1));      // ""
console.log(repeatStringNumTimes("a", 10));         // "aaaaaaaaaa"

// Using built-in method
console.log(repeatStringNumTimesBuiltIn("xyz", 4)); // "xyzxyzxyzxyz"
