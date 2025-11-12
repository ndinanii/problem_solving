/**
 * String Inverter (Recursive String Reversal)
 * 
 * Reverses a string using recursion. This approach breaks down the problem
 * by swapping the first and last characters and recursively processing the middle.
 */

function reverseString(str) {
    // Base case: if string has 1 or 0 characters, it's already "reversed"
    if (str.length <= 1) {
        return str;
    }
    
    // Extract the first and last characters
    const firstChar = str[0];
    const lastChar = str[str.length - 1];
    
    // Extract the middle portion (everything except first and last)
    const middle = str.slice(1, -1);
    
    // Recursive case: last + reverse(middle) + first
    return lastChar + reverseString(middle) + firstChar;
}

// Test cases
console.log(reverseString("hello"));      // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("a"));          // "a"
console.log(reverseString(""));           // ""
