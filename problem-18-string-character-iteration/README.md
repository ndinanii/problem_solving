# Problem 18: String Character Iteration

## Problem Description

Learn how to iterate through each character of a string using a for loop. This demonstrates character-by-character string access in JavaScript.

## Requirements

- Given a string, iterate through each character
- Print each character on a separate line
- Understand proper loop boundaries

## Approach

Use a for loop with index-based access to iterate through the string:
1. Start at index 0 (first character)
2. Continue while index is less than string length
3. Access each character using bracket notation `str[i]`
4. Print each character

## Solution Logic

### String Indexing
In JavaScript, strings are indexed like arrays:
```
str = "Hello"
str[0] = 'H'
str[1] = 'e'
str[2] = 'l'
str[3] = 'l'
str[4] = 'o'
```

### Loop Boundary - Important Detail!

**Original code has a bug:**
```javascript
for (let i = 0; i <= str.length; ++i)
```

This goes **beyond** the string length, causing:
- Last iteration tries to access `str[str.length]`
- This index doesn't exist
- Results in `undefined` being printed

**Correct approach:**
```javascript
for (let i = 0; i < str.length; i++)
```

Use `<` not `<=` because:
- String indices go from `0` to `length - 1`
- `str.length` is out of bounds

### Character Access
```javascript
str[i]
```
Uses bracket notation to access the character at index `i`.

**Time Complexity:** O(n) where n is string length  
**Space Complexity:** O(1) - no additional storage

## Example Output

For string `"Asap Front End"`:
```
A
s
a
p
 
F
r
o
n
t
 
E
n
d
```

Notice the spaces are also printed (they're characters too!).

## Common Bug: Off-by-One Error

The original code demonstrates a classic **off-by-one error**:
- Using `<=` instead of `<` in loop condition
- Accessing index that doesn't exist
- Results in `undefined` output

This is one of the most common bugs in programming!

## Alternative Methods

### 1. for...of loop (cleaner)
```javascript
for (let char of str) {
    console.log(char);
}
```
✅ No index management, no off-by-one errors

### 2. forEach with split
```javascript
str.split('').forEach(char => console.log(char));
```
✅ Functional approach

### 3. Array.from()
```javascript
Array.from(str).forEach(char => console.log(char));
```

### 4. Spread operator
```javascript
[...str].forEach(char => console.log(char));
```

### 5. charAt() method
```javascript
for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}
```

## When to Use Each Method

| Method | Best For |
|--------|----------|
| `for (i = 0; i < length)` | When you need index position |
| `for...of` | When you only need character values |
| `split('').forEach()` | When chaining array methods |
| `charAt()` | Older browser compatibility |

## Common String Operations

Once you can iterate through strings, you can:

### Count specific characters
```javascript
let count = 0;
for (let char of str) {
    if (char === 'a') count++;
}
```

### Build a new string
```javascript
let reversed = '';
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
```

### Check for patterns
```javascript
for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
        console.log('Found duplicate at index', i);
    }
}
```

## Educational Value

This problem teaches:
- **String indexing**: How characters are accessed
- **Loop boundaries**: Proper use of `<` vs `<=`
- **Off-by-one errors**: Common pitfall to avoid
- **Index-based iteration**: Foundation for many algorithms

## Real-World Applications

Character iteration is fundamental for:
- **Parsing**: Reading configuration files, CSV data
- **Validation**: Checking email format, password strength
- **Text processing**: Find and replace, highlighting
- **Encryption**: Character-by-character transformations
- **Compression**: Analyzing character frequency
- **Search algorithms**: Pattern matching within strings
