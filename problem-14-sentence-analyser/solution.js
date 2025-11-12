/**
 * Sentence Analyser
 * 
 * A collection of functions to analyze sentences and count different
 * types of characters: vowels, consonants, punctuation, and words.
 */

/**
 * Counts the number of vowels in a sentence (case-insensitive)
 */
function getVowelCount(sentence) {
    // Define all vowels (both uppercase and lowercase)
    const vowel = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    let counter = 0;
    
    // Iterate over each character in the sentence
    for (let char of sentence) {
        // Check if current character is a vowel
        if (vowel.includes(char)) {
            counter++;
        }
    }
    
    return counter;
}

/**
 * Counts the number of consonants in a sentence (case-insensitive)
 */
function getConsonantCount(sentence) {
    const consonants = [
        'b', 'B', 'c', 'C', 'd', 'D', 'f', 'F', 'g', 'G', 'h', 'H',
        'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'p', 'P',
        'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'v', 'V', 'w', 'W',
        'x', 'X', 'y', 'Y', 'z', 'Z'
    ];
    let counter = 0;
    
    for (let char of sentence) {
        if (consonants.includes(char)) {
            counter++;
        }
    }
    
    return counter;
}

/**
 * Counts the number of punctuation marks in a sentence
 */
function getPunctuationCount(sentence) {
    const punctuation = [
        '.', ',', '!', '?', ';', ':', '\'', '"',
        '-', '(', ')', '[', ']', '{', '}', '/', '\\'
    ];
    let counter = 0;
    
    for (let char of sentence) {
        if (punctuation.includes(char)) {
            counter++;
        }
    }
    
    return counter;
}

/**
 * Counts the number of words in a sentence
 * Words are separated by whitespace
 */
function getWordCount(sentence) {
    // Remove leading/trailing spaces
    const trimmed = sentence.trim();
    
    // Return 0 if string is empty or only spaces
    if (trimmed === "") {
        return 0;
    }
    
    // Split by one or more whitespace characters
    const words = trimmed.split(/\s+/);
    return words.length;
}

// Test cases
console.log(getVowelCount("Hey there, I am looking at you."));     // 11
console.log(getConsonantCount("Hey there, I am hungry"));          // 11
console.log(getPunctuationCount("Hello, world! How are you?"));    // 4
console.log(getWordCount("This is a test sentence"));              // 5
console.log(getWordCount("  Multiple   spaces   here  "));         // 3
console.log(getWordCount(" "));                                    // 0
