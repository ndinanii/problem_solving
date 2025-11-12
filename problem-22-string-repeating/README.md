# Problem 22: String Repeating

## Problem Description

Create a function that repeats a given string a specified number of times. If the number is zero or negative, return an empty string.

## Requirements

- Function accepts two parameters: `str` (string) and `num` (number of repetitions)
- Return the string repeated `num` times
- If `num` is 0 or negative, return an empty string
- Strings should be concatenated without any separator

## Approach

### Method 1: Manual Loop (Educational)
1. Initialize an empty result string
2. Check if num is 0 or negative → return empty string
3. Loop `num` times
4. Concatenate the string to result each iteration
5. Return the final result

### Method 2: Built-in Method (Practical)
Use JavaScript's built-in `String.prototype.repeat()` method for cleaner code.

## Solution Logic

### Edge Case Handling
```javascript
if (num <= 0) {
    return "";
}
```

This handles:
- `num = 0`: No repetitions → empty string
- `num < 0`: Negative numbers don't make sense → empty string

### String Concatenation in Loop
```javascript
for (let i = 0; i < num; i++) {
    result += str;
}
```

Each iteration adds the string to the growing result:
- Iteration 1: result = "" + "abc" = "abc"
- Iteration 2: result = "abc" + "abc" = "abcabc"
- Iteration 3: result = "abcabc" + "abc" = "abcabcabc"

### Built-in repeat() Method
```javascript
str.repeat(num)
```

Much simpler and optimized! This is the preferred method in production code.

**Time Complexity:** O(n × m) where n = num, m = string length  
**Space Complexity:** O(n × m) for the result string

## Example Usage

```javascript
repeatStringNumTimes("abc", 3);
// Returns: "abcabcabc"

repeatStringNumTimes("*", 5);
// Returns: "*****"

repeatStringNumTimes("Hello", 2);
// Returns: "HelloHello"

repeatStringNumTimes("test", 0);
// Returns: ""

repeatStringNumTimes("no", -5);
// Returns: ""
```

## Performance Comparison

### Manual Concatenation (Loop)
```javascript
function repeatString(str, num) {
    let result = "";
    for (let i = 0; i < num; i++) {
        result += str;
    }
    return result;
}
```
- ✅ Educational: Shows the logic clearly
- ❌ Slower for large repetitions
- ❌ String concatenation creates new strings each time

### Built-in repeat()
```javascript
function repeatString(str, num) {
    return num > 0 ? str.repeat(num) : "";
}
```
- ✅ Clean and concise
- ✅ Optimized by JavaScript engine
- ✅ Industry standard
- ✅ More readable

## Alternative Implementations

### Using Array.fill() and join()
```javascript
function repeatString(str, num) {
    if (num <= 0) return "";
    return new Array(num).fill(str).join('');
}
```

### Recursive Approach
```javascript
function repeatString(str, num) {
    if (num <= 0) return "";
    if (num === 1) return str;
    return str + repeatString(str, num - 1);
}
```

### Using Array.from()
```javascript
function repeatString(str, num) {
    if (num <= 0) return "";
    return Array.from({length: num}, () => str).join('');
}
```

## Why String Concatenation Can Be Slow

In JavaScript, strings are **immutable**:
```javascript
result += str;  // Creates a NEW string each time!
```

For 1000 repetitions:
- Iteration 1: Create string of length n
- Iteration 2: Create string of length 2n
- Iteration 3: Create string of length 3n
- ...
- Total operations: 1 + 2 + 3 + ... + 1000 = O(n²)

The `repeat()` method is optimized internally to avoid this.

## Edge Cases

```javascript
repeatStringNumTimes("", 5);       // ""  (empty string repeated)
repeatStringNumTimes("abc", 0);    // ""  (zero repetitions)
repeatStringNumTimes("abc", -3);   // ""  (negative repetitions)
repeatStringNumTimes("a", 1);      // "a" (single repetition)
repeatStringNumTimes("ab", 1000);  // Very long string
```

## Real-World Applications

String repetition is used in:

1. **Text Formatting**:
```javascript
const line = "=".repeat(50);  // "=".repeat(50)
console.log(line);
console.log("Title");
console.log(line);
```

2. **Padding**:
```javascript
const paddedNumber = "0".repeat(5 - num.toString().length) + num;
// "00042" for num = 42
```

3. **Visual Indicators**:
```javascript
const stars = "*".repeat(rating);  // "***" for 3-star rating
```

4. **Testing**:
```javascript
const longString = "a".repeat(10000);  // Generate test data
```

5. **ASCII Art**:
```javascript
function pyramid(height) {
    for (let i = 1; i <= height; i++) {
        console.log(" ".repeat(height - i) + "*".repeat(2 * i - 1));
    }
}
```

6. **Progress Bars**:
```javascript
const progress = "█".repeat(percent / 10) + "░".repeat(10 - percent / 10);
```

7. **Masking**:
```javascript
const maskedPassword = "*".repeat(password.length);
```

## Browser Compatibility

`String.prototype.repeat()` is supported in:
- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Node.js
- ❌ IE11 and below (use polyfill or manual implementation)

## Best Practices

1. **Use `repeat()` for production code**: It's cleaner and faster
2. **Validate input**: Check if `num` is a valid number
3. **Consider memory**: Very large repetitions can cause memory issues
4. **Use descriptive names**: `repeatCount` is clearer than `num`

## Enhanced Version with Validation

```javascript
function repeatStringNumTimes(str, num) {
    // Validate inputs
    if (typeof str !== 'string') {
        throw new TypeError('First argument must be a string');
    }
    if (typeof num !== 'number' || !Number.isInteger(num)) {
        throw new TypeError('Second argument must be an integer');
    }
    
    // Handle edge cases
    if (num <= 0) return "";
    if (num === 1) return str;
    
    // Use built-in method
    return str.repeat(num);
}
```
