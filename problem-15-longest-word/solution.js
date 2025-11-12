/**
 * Longest Word Finder
 * 
 * Finds and returns the length of the longest word in a sentence.
 * Words are separated by spaces.
 */

function findLongestWordLength(sentence) {
    // Split the sentence into an array of words (separated by spaces)
    const sentenceArr = sentence.split(" ");
    
    // Variable to store the longest word found so far
    let longest = "";
    
    // Iterate through each word in the array
    for (const word of sentenceArr) {
        // Compare current word's length with the longest word's length
        // If current word is longer, update the longest variable
        if (word.length > longest.length) {
            longest = word;
        }
    }
    
    // Return the length of the longest word
    return longest.length;
}

// Test cases
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
// Expected: 6 ("jumped")

console.log(findLongestWordLength("who said anything about you?"));
// Expected: 8 ("anything")

console.log(findLongestWordLength("May the force be with you"));
// Expected: 5 ("force")

console.log(findLongestWordLength("Hello"));
// Expected: 5 ("Hello")
