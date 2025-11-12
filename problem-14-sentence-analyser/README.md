# Problem 14: Sentence Analyser

## Problem Description

Create a set of functions to analyze sentences and count different types of characters and words. This toolkit helps break down text into its components for analysis.

## Requirements

Create four functions:
1. **getVowelCount**: Count all vowels (a, e, i, o, u) - case insensitive
2. **getConsonantCount**: Count all consonants (b-z excluding vowels) - case insensitive
3. **getPunctuationCount**: Count punctuation marks
4. **getWordCount**: Count words separated by whitespace

All functions should:
- Accept a sentence (string) as parameter
- Return a number (count)
- Handle edge cases (empty strings, extra spaces)

## Approach

### Character Counting Functions (Vowels, Consonants, Punctuation)
1. Define an array of target characters
2. Iterate through each character in the sentence
3. Check if character exists in target array
4. Increment counter if match found
5. Return final count

### Word Counting Function
1. Trim leading/trailing whitespace
2. Check for empty string
3. Split by whitespace (handling multiple spaces)
4. Count resulting array elements

## Solution Logic

### For...of Loop
All character counting functions use the `for...of` loop:
```javascript
for (let char of sentence) {
    // char contains one character at a time
}
```
This is cleaner than index-based loops for character iteration.

### Array.includes()
The `.includes()` method checks if a value exists in an array:
```javascript
if (vowel.includes(char)) { ... }
```
This is more readable than manual searching.

### Regex for Word Splitting
The word counter uses `/\s+/` regex:
- `\s`: Matches any whitespace character (space, tab, newline)
- `+`: Matches one or more consecutive whitespace characters
- This handles multiple spaces correctly: `"a    b"` → `["a", "b"]`

### Case Sensitivity Handling
Both uppercase and lowercase versions are included in arrays:
```javascript
const vowel = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
```

**Time Complexity:** 
- Vowel/Consonant/Punctuation: O(n×m) where n = sentence length, m = array length
- Word count: O(n) for string operations

**Space Complexity:** O(1) for counting functions, O(n) for word splitting

## Example Usage

```javascript
getVowelCount("Hello World");           // Returns: 3 (e, o, o)
getConsonantCount("Hello World");       // Returns: 7 (H, l, l, W, r, l, d)
getPunctuationCount("Hello, World!");   // Returns: 2 (, !)
getWordCount("Hello World");            // Returns: 2
getWordCount("  Hello   World  ");      // Returns: 2 (handles extra spaces)
getWordCount("");                       // Returns: 0
```

## Optimization Opportunities

For production use, consider:

1. **Case conversion instead of duplicate letters**:
```javascript
sentence.toLowerCase();
const vowel = ['a', 'e', 'i', 'o', 'u'];
```

2. **Using regex for character matching**:
```javascript
const vowelCount = sentence.match(/[aeiou]/gi)?.length || 0;
```

3. **Combined analysis** (one pass for all counts):
```javascript
function analyzeText(sentence) {
    // Single loop counting everything at once
}
```

## Real-World Applications

- **Text editors**: Character/word count features
- **SEO tools**: Keyword density analysis
- **Reading level calculators**: Analyzing text complexity
- **Data validation**: Checking password requirements
- **Natural language processing**: Text preprocessing
- **Spell checkers**: Identifying word boundaries
