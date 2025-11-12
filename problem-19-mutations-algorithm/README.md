# Problem 19: Mutations Algorithm

## Problem Description

Check if all letters from the second string are contained within the first string. The check should be case-insensitive, meaning "A" and "a" are considered the same letter.

## Requirements

- Function accepts an array with two string elements
- First element is the target string (to search in)
- Second element is the query string (letters to find)
- Return `true` if ALL letters from second string exist in first string
- Return `false` if ANY letter from second string is missing in first string
- Comparison should be case-insensitive
- Duplicate letters in second string must each have a match in first string

## Approach

1. Convert both strings to lowercase for case-insensitive comparison
2. Trim any whitespace from both strings
3. Iterate through each character of the second string
4. Check if each character exists in the first string
5. Return false immediately if any character is missing
6. Return true if all characters are found

## Solution Logic

### Case Normalization
```javascript
const first = arr[0].toLowerCase().trim();
const second = arr[1].toLowerCase().trim();
```

Converting to lowercase ensures "A" matches "a". Trimming removes leading/trailing spaces.

### Character Checking with includes()
```javascript
if (!first.includes(char))
```

The `includes()` method:
- Returns `true` if the character exists in the string
- Returns `false` if not found
- We use `!` (NOT operator) to check for absence

### Early Return Optimization
```javascript
for (const char of second) {
    if (!first.includes(char)) {
        return false;  // Exit immediately on first missing character
    }
}
```

We don't need to check all characters if we find one that's missing. This makes the function more efficient.

### Why the Name "Mutations"?

In this context, "mutation" refers to checking if one string can be formed by rearranging (mutating) letters from another string.

**Time Complexity:** O(n × m) where n = length of second string, m = length of first string  
**Space Complexity:** O(n + m) for lowercase conversions

## Example Usage

```javascript
mutation(["hello", "Hello"]);     // true - same letters, different case
mutation(["hello", "hey"]);       // false - 'y' not in "hello"
mutation(["Mary", "Army"]);       // true - M,a,r,y all in "Mary"
mutation(["Alien", "line"]);      // true - l,i,n,e all in "Alien"
mutation(["voodoo", "no"]);       // false - second 'o' needed but only two in first
```

## Edge Cases

### Duplicate Letters
```javascript
mutation(["hello", "ll"]);  // true - "hello" has two 'l's
```
✅ Each occurrence is checked separately

### Empty Strings
```javascript
mutation(["hello", ""]);    // true - no letters to check
mutation(["", "hello"]);    // false - can't find letters in empty string
```

### Same String
```javascript
mutation(["test", "test"]); // true - all letters present
```

## Alternative Implementations

### Method 1: Using every()
```javascript
function mutation(arr) {
    const first = arr[0].toLowerCase();
    const second = arr[1].toLowerCase();
    return second.split('').every(char => first.includes(char));
}
```

### Method 2: Using Set (if order doesn't matter)
```javascript
function mutation(arr) {
    const first = new Set(arr[0].toLowerCase());
    const second = arr[1].toLowerCase();
    return [...second].every(char => first.has(char));
}
```

### Method 3: Using indexOf()
```javascript
function mutation(arr) {
    const first = arr[0].toLowerCase();
    const second = arr[1].toLowerCase();
    for (let char of second) {
        if (first.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}
```

## Related Problems

This algorithm is similar to:
- **Anagram detection**: Check if two strings have same letters
- **Substring check**: Check if string contains another
- **Character frequency**: Count occurrences of each character
- **Permutation check**: Determine if one string is permutation of another

## Optimization Considerations

For very long strings, consider:
1. **Early termination**: Already implemented
2. **Character frequency map**: Count letters once, then check
3. **Set-based lookup**: O(1) character checking vs O(n) with includes()

Example with frequency map:
```javascript
function mutationOptimized(arr) {
    const first = arr[0].toLowerCase();
    const second = arr[1].toLowerCase();
    
    const charCount = {};
    for (let char of first) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    for (let char of second) {
        if (!charCount[char] || charCount[char] === 0) {
            return false;
        }
        charCount[char]--;
    }
    
    return true;
}
```

## Real-World Applications

- **Spell checkers**: Check if word can be formed from available letters
- **Scrabble/Word games**: Validate playable words
- **Anagram finders**: Part of anagram detection
- **Text analysis**: Character set validation
- **Password validation**: Check for required character types
- **Data validation**: Ensure strings contain specific characters
