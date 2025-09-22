// Finding the longest word in a sentence using a function
// The functon should take a sentence as a parameter
// Return the length of the longest word in the string



// Iterate through each item in the Array using:
// a for...of loop, which:

// On each iteration, word becomes the next item in the array.

function findLongestWordLength (sentence){
    // We will break the sentence into an Array where there is space between words.
    const sentenceArr = sentence.split(" ") // Store the array in a variable
    let longest = ""; // This variable will store the longest word found so far as you loop through the array.

    // Loops through each item (word) in the sentenceArr array.
    for(const word of sentenceArr){
        // word.length is the length of the current word in the loop.
        // longest.length is the length of the longest word you’ve stored so far.
        /* summary of condition
        “Is the current word longer than the longest one I’ve seen before?”
        If yes, then update longest.

        For each word, you compare its length to the current longest.
        If the word is longer, you update the longest variable.
        The loop ensures every word gets checked once, and you always keep the longest one seen so far.
        */
        
        if(word.length > longest.length){ 
            longest = word;
        }
    }

    return longest.length;
}

console.log(findLongestWordLength("who said anything about you?"))