# Problem 09: String Inverter

## Problem Description

Create a function that reverses a string using **recursion**. Rather than using built-in methods or loops, this solution demonstrates the recursive problem-solving approach.

## Requirements

- Function should accept a string as a parameter
- Return the string reversed
- Use recursion (function calls itself)
- Handle edge cases (empty strings, single characters)

## Approach

### Recursive Strategy
1. **Base case**: If string length ≤ 1, return it as-is
2. **Recursive case**: 
   - Take the last character
   - Recursively reverse the middle portion
   - Append the first character
   - Pattern: `last + reverse(middle) + first`

### How it works with "hello":
```
reverseString("hello")
= 'o' + reverseString("ell") + 'h'
= 'o' + ('l' + reverseString("l") + 'e') + 'h'
= 'o' + ('l' + 'l' + 'e') + 'h'
= 'o' + 'lle' + 'h'
= "olleh"
```

## Solution Logic

The solution uses the **divide and conquer** paradigm:
- **Divide**: Split into first char, middle, last char
- **Conquer**: Recursively reverse the middle
- **Combine**: Reassemble as last + middle + first

**Base Case** prevents infinite recursion:
- Strings with 0 or 1 characters are already "reversed"
- This ensures the recursion eventually terminates

**Recursive Call** on the middle portion (`str.slice(1, -1)`):
- Removes first and last characters
- Each recursive call works on a progressively smaller string

**Time Complexity:** O(n²) due to string concatenation at each level  
**Space Complexity:** O(n) for the call stack

## Example Usage

```javascript
reverseString("hello");      // Returns: "olleh"
reverseString("JavaScript"); // Returns: "tpircSavaJ"
reverseString("a");          // Returns: "a"
reverseString("");           // Returns: ""
```

## Alternative Approaches

While this solution demonstrates recursion, other methods exist:
- **Built-in**: `str.split('').reverse().join('')`
- **Loop**: Iterate backwards building a new string
- **Array methods**: Using `reduce()` or `for...of`

The recursive approach is educational but not the most efficient for this problem.
