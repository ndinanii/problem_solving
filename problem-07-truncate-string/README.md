# Problem 07: Truncate String

## Problem Description

Create a function that truncates a string to a specified length. If the string is longer than the specified length, cut it off and add "..." at the end. If the string is already short enough, return it unchanged.

## Requirements

- Function should accept a string and a number (max length)
- If string length > num, truncate and add "..."
- If string length <= num, return the original string
- The "..." is added AFTER truncation (not counted in the num limit)

## Approach

1. Compare the string length with the specified number
2. If longer: use `slice()` to cut the string at the specified position
3. Append "..." to the truncated result
4. If shorter or equal: return the original string

## Solution Logic

The solution uses a simple conditional check:
- `str.length > num`: String needs truncation
- `slice(0, num)`: Extracts characters from index 0 to num (exclusive)
- Concatenate "..." to indicate continuation

**Important:** The ellipsis ("...") is added to the truncated string, so the final result will be `num + 3` characters long when truncation occurs.

**Time Complexity:** O(n) where n is the length to slice  
**Space Complexity:** O(n) for the new string created

## Example Usage

```javascript
truncateString("A-tisket a-tasket A green and yellow basket", 8);
// Returns: "A-tisket..."

truncateString("Hello World", 20);
// Returns: "Hello World" (unchanged - already short enough)

truncateString("JavaScript", 4);
// Returns: "Java..."
```

## Alternative Approach

You could also use the ternary operator for a more concise solution:
```javascript
function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
}
```
