// function to get vowels from sentence
function getVowelCount(sentence){
    // Define the vowels and where the counter starts
    const vowel = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    let counter = 0;

    // Iterate over the sentence using the char variable
    for (let char of sentence){
        // The current character from the string is stored in the variable char.
         // You can then do something with char inside the loop body
        if (vowel.includes(char)){
            // .includes(char) This checks whether the array vowel contains the value char
            counter ++; 
        }
    }

    return counter;

}
console.log(getVowelCount("Hey there, I am looking at you."))

function getConsonantCount(sentence){
    const consonants = ['b', 'B', 'c', 'C', 'd', 'D', 'f', 'F', 'g', 'G', 'h', 'H', 
                    'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'p', 'P', 
                    'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'v', 'V', 'w', 'W', 
                    'x', 'X', 'y', 'Y', 'z', 'Z'];
    let counter = 0;

    for(let char of sentence){
        if(consonants.includes(char)){
            counter ++;
        }
    }

    return counter;
}

console.log(getConsonantCount("Hey there, I am hungry"))

function getPunctuationCount(sentence){
    const punctuation = ['.', ',', '!', '?', ';', ':', '\'', '"', 
        '-', '(', ')', '[', ']', '{', '}', '/', '\\'];
    
    let counter = 0;

    for (let char of sentence){
        if(punctuation.includes(char)){
            counter ++;
        }
    }

    return counter;
}



function getWordCount (sentence){
    
    const trimmed = sentence.trim(); // removes any extra spaces at the beginning and end of the string.
    if (trimmed === "") {
        return 0; // No words if string is empty or only spaces
    }

    const words = trimmed.split(/\s+/);
    return words.length;

}

console.log(getWordCount(" "))