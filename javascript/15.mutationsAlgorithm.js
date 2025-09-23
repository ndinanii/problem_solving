// Function named mutation, takes an array as argument
// mutation here means there will be two elements in array
// First element's letters should be all present in second element for true
// anything else is false. 
// mutation(["Hello", "hello"]) returns true


function mutation (arr){
    // both elements must be lower case for easier comparisons
    // remove any white space

    const first = arr[0].toLowerCase().trim();
    const second = arr[1].toLowerCase().trim();

    // Loop through each character of the second word:
    for (const char of second) {
        // If any letter from second is not in first, return false immediately.
        if (!first.includes(char)) {
            return false;
        }
    }
    // If loop completes, it means all letters in second are in first
    return true;
}

console.log(mutation(["Banana","anana"]))