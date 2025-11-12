/**
 * Mutations Algorithm
 * 
 * Checks if all letters from the second element of an array are present
 * in the first element. Returns true if yes, false if no.
 * Case-insensitive comparison.
 */

function mutation(arr) {
    // Convert both elements to lowercase for case-insensitive comparison
    // Also trim any whitespace
    const first = arr[0].toLowerCase().trim();
    const second = arr[1].toLowerCase().trim();
    
    // Loop through each character of the second word
    for (const char of second) {
        // If any letter from second is not in first, return false immediately
        if (!first.includes(char)) {
            return false;
        }
    }
    
    // If loop completes, all letters in second are present in first
    return true;
}

// Test cases
console.log(mutation(["hello", "hey"]));        // false ('y' not in "hello")
console.log(mutation(["hello", "Hello"]));      // true (case insensitive)
console.log(mutation(["Mary", "Army"]));        // true (all letters present)
console.log(mutation(["Mary", "Aarmy"]));       // true (duplicates ok)
console.log(mutation(["Alien", "line"]));       // true
console.log(mutation(["floor", "for"]));        // true
console.log(mutation(["Banana", "anana"]));     // true
console.log(mutation(["hello", "neo"]));        // false ('n' not in "hello")
