# Problem 24: Fear Not Letter

## Problem Description

Find the missing letter in a passed letter range and return it. If all letters are present in the range, return `undefined`. The input will always be a consecutive sequence of letters (with possibly one missing).

## Requirements

- Function accepts a string representing a range of consecutive letters
- Letters are in alphabetical order
- Find and return the missing letter (if any)
- Return `undefined` if no letter is missing
- Input is lowercase letters only

## Approach

1. Create a reference alphabet string
2. Find where the input string starts in the alphabet
3. Loop through each position in the input string
4. For each position, determine what letter *should* be there
5. Compare expected letter with actual letter
6. If they don't match, return the expected (missing) letter
7. If loop completes, no letter is missing → return `undefined`

## Solution Logic

### Alphabet Reference
```javascript
const alphabet = "abcdefghijklmnopqrstuvwxyz";
```

This gives us a reference for what the correct sequence should be.

### Finding Start Position
```javascript
const startIndex = alphabet.indexOf(str[0]);
```

If `str = "stvwx"`, then `str[0] = "s"`, and `alphabet.indexOf("s") = 18`.

This tells us where in the alphabet our sequence begins.

### Expected vs Actual Comparison
```javascript
const expected = alphabet[startIndex + i];
const actual = str[i];
```

For each position `i` in our string:
- **Expected**: What letter should be at this position (from alphabet)
- **Actual**: What letter is actually there (from input string)

If they don't match, we've found the missing letter!

### Example: "abce"
```
i=0: expected='a', actual='a' ✓
i=1: expected='b', actual='b' ✓
i=2: expected='c', actual='c' ✓
i=3: expected='d', actual='e' ✗ → Return 'd'
```

**Time Complexity:** O(n) where n is string length  
**Space Complexity:** O(1) - fixed alphabet string

## Example Walkthrough

### Example 1: "stvwx" (missing "u")

| i | startIndex + i | Expected (alphabet) | Actual (str) | Match? |
|---|----------------|---------------------|--------------|--------|
| 0 | 18 | 's' | 's' | ✓ |
| 1 | 19 | 't' | 't' | ✓ |
| 2 | 20 | 'u' | 'v' | ✗ Return 'u' |

### Example 2: "abcdefg" (no missing letter)

| i | startIndex + i | Expected | Actual | Match? |
|---|----------------|----------|--------|--------|
| 0 | 0 | 'a' | 'a' | ✓ |
| 1 | 1 | 'b' | 'b' | ✓ |
| 2 | 2 | 'c' | 'c' | ✓ |
| 3 | 3 | 'd' | 'd' | ✓ |
| 4 | 4 | 'e' | 'e' | ✓ |
| 5 | 5 | 'f' | 'f' | ✓ |
| 6 | 6 | 'g' | 'g' | ✓ |

Loop completes → Return `undefined`

## Example Usage

```javascript
fearNotLetter("abce");        // Returns: "d"
fearNotLetter("abcdefghjklmno"); // Returns: "i"
fearNotLetter("stvwx");       // Returns: "u"
fearNotLetter("bcdf");        // Returns: "e"
fearNotLetter("abcdefghijklmnopqrstuvwxyz"); // Returns: undefined
```

## Alternative Implementations

### Method 1: Using character codes
```javascript
function fearNotLetter(str) {
    for (let i = 0; i < str.length - 1; i++) {
        const currentCode = str.charCodeAt(i);
        const nextCode = str.charCodeAt(i + 1);
        
        // If there's a gap in character codes
        if (nextCode - currentCode > 1) {
            return String.fromCharCode(currentCode + 1);
        }
    }
    return undefined;
}
```

### Method 2: Using Array.from() and find()
```javascript
function fearNotLetter(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const start = alphabet.indexOf(str[0]);
    
    return Array.from(str).find((char, i) => 
        char !== alphabet[start + i]
    ) ? alphabet[start + Array.from(str).findIndex((char, i) => 
        char !== alphabet[start + i]
    )] : undefined;
}
```

### Method 3: Generating expected string and comparing
```javascript
function fearNotLetter(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const start = alphabet.indexOf(str[0]);
    const expected = alphabet.slice(start, start + str.length);
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== expected[i]) {
            return expected[i];
        }
    }
    return undefined;
}
```

## Understanding Character Codes

JavaScript represents characters using Unicode/ASCII codes:
```javascript
'a'.charCodeAt(0);  // 97
'b'.charCodeAt(0);  // 98
'c'.charCodeAt(0);  // 99
...
'z'.charCodeAt(0);  // 122
```

Consecutive letters have consecutive codes!

Convert back:
```javascript
String.fromCharCode(97);  // 'a'
String.fromCharCode(98);  // 'b'
```

## Edge Cases

```javascript
fearNotLetter("a");          // undefined (single letter, nothing missing)
fearNotLetter("ab");         // undefined (two consecutive letters)
fearNotLetter("ac");         // "b" (missing letter between)
fearNotLetter("xyz");        // undefined (end of alphabet)
fearNotLetter("abcdefghijklmnopqrstuvwxyz");  // undefined (complete alphabet)
```

## Assumptions

Based on the problem:
- Input is always lowercase
- Input letters are always in order
- There's at most one missing letter
- Input is never empty

## Real-World Applications

This pattern of finding "gaps" in sequences is used in:

1. **Data Validation**:
```javascript
// Find missing page numbers in a document
function findMissingPage(pages) { /* similar logic */ }
```

2. **Inventory Management**:
```javascript
// Find missing serial numbers in a batch
```

3. **Database Records**:
```javascript
// Find gaps in sequential IDs
```

4. **Network Packets**:
```javascript
// Detect missing packets in a sequence
```

5. **Version Control**:
```javascript
// Find missing version numbers
```

6. **Quality Assurance**:
```javascript
// Detect missing test cases in a sequence
```

## Visual Representation

```
Input: "abce"

Expected: a b c d e
Actual:   a b c   e
                ↑
            Missing: d
```

```
Input: "stvwx"

Expected: s t u v w x
Actual:   s t   v w x
              ↑
          Missing: u
```

## Related Concepts

- **Sequential data**: Working with ordered sequences
- **Array indexing**: Position-based access
- **String methods**: indexOf(), charAt()
- **Comparison operators**: Detecting differences
- **Early returns**: Exiting when condition met

## Optimization Notes

The solution is already quite efficient:
- Single pass through the string: O(n)
- Constant space usage: O(1)
- Early return when missing letter found

For production use, you might add:
- Input validation (ensure lowercase, alphabetical)
- Error handling for invalid inputs
- Support for uppercase letters
- Support for multiple missing letters

## Enhanced Version with Validation

```javascript
function fearNotLetter(str) {
    // Validate input
    if (!str || typeof str !== 'string') {
        return undefined;
    }
    
    if (!/^[a-z]+$/.test(str)) {
        throw new Error('Input must contain only lowercase letters');
    }
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const startIndex = alphabet.indexOf(str[0]);
    
    for (let i = 0; i < str.length; i++) {
        const expected = alphabet[startIndex + i];
        const actual = str[i];
        
        if (expected !== actual) {
            return expected;
        }
    }
    
    return undefined;
}
```
