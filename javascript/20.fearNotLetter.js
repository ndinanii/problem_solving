function fearNotLetter(str) {  
    // Create a string of all letters in order  
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    // Find where our string starts in the alphabet  
    const startIndex = alphabet.indexOf(str[0]);  

    // Check each character in order  
    for (let i = 0; i < str.length; i++) {
        // The letter that should be at this position    
        const expected = alphabet[startIndex + i];
        
        // The actual letter from our string
        const actual = str[i];        
        
        // If they don't match, we found the missing letter
    
        if (expected !== actual) {
            return expected;    
        }  
    }  

    // All letters are in order  
    return undefined;
    
}

console.log(fearNotLetter("abcefg"))
