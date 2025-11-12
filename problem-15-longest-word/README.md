# Problem 15: Longest Word

## Problem Description

Create a function that finds the longest word in a sentence and returns its length. Words are separated by spaces.

## Requirements

- Function should accept a sentence (string) as parameter
- Split the sentence into individual words
- Find the longest word
- Return the length (number of characters) of the longest word
- Handle sentences with equal-length words (return length of any)

## Approach

1. Split the sentence into an array of words using space as delimiter
2. Initialize a variable to track the longest word
3. Iterate through each word in the array
4. Compare each word's length to the current longest
5. Update longest if a longer word is found
6. Return the length of the longest word

## Solution Logic

### String Splitting
```javascript
sentence.split(" ")
```
Creates an array where each element is a word. The space character is the delimiter.

Example: `"Hello World"` → `["Hello", "World"]`

### Tracking the Longest Word
Instead of just tracking the length, we store the actual longest word:
```javascript
let longest = "";
```

This allows us to access both the word and its length at any time.

### Comparison Logic
```javascript
if (word.length > longest.length)
```

Key insight: We compare lengths, not the words themselves. This ensures we find the longest regardless of alphabetical order.

### For...of Loop
```javascript
for (const word of sentenceArr)
```

This is cleaner than traditional index-based loops when you only need the values (not indices).

**Time Complexity:** O(n) where n is the number of words  
**Space Complexity:** O(n) for the array created by split()

## Example Usage

```javascript
findLongestWordLength("The quick brown fox");
// Returns: 5 (words "quick" and "brown")

findLongestWordLength("Hello World");
// Returns: 5 ("Hello" or "World")

findLongestWordLength("Supercalifragilisticexpialidocious");
// Returns: 34 (the whole word)
```

## Edge Cases

1. **Single word**: Returns the length of that word
2. **Multiple longest words**: Returns length (all are same anyway)
3. **Empty string**: Returns 0 (empty string has length 0)
4. **Multiple spaces**: May create empty strings in array (length 0)

## Alternative Approaches

### Method 1: Using reduce()
```javascript
function findLongestWordLength(sentence) {
    return sentence.split(" ").reduce((longest, word) => 
        word.length > longest ? word.length : longest, 0);
}
```

### Method 2: Using sort()
```javascript
function findLongestWordLength(sentence) {
    const words = sentence.split(" ");
    words.sort((a, b) => b.length - a.length);
    return words[0].length;
}
```
Note: This is O(n log n) due to sorting, less efficient than O(n) loop.

### Method 3: Using Math.max()
```javascript
function findLongestWordLength(sentence) {
    return Math.max(...sentence.split(" ").map(word => word.length));
}
```

## Enhancements

If you want to return the actual word (not just length):
```javascript
function findLongestWord(sentence) {
    const sentenceArr = sentence.split(" ");
    let longest = "";
    
    for (const word of sentenceArr) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    
    return longest;  // Returns the word itself
}
```

## Real-World Applications

- Text analysis tools
- Word games (finding longest playable word)
- Typography (determining column widths)
- Data validation (checking string length limits)
- Natural language processing
