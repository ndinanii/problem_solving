# Problem 02: Sum Equals

## Problem Description

Create a function that determines whether the sum of two numbers equals a third number.

## Requirements

- Function should accept three numbers as parameters
- Return `true` if the first two numbers add up to the third
- Return `false` if they don't add up
- Validate that all three parameters are provided

## Approach

1. Validate that all three parameters exist
2. Add the first two numbers together
3. Compare the sum to the third number
4. Return boolean result

## Solution Logic

The solution performs a simple addition and comparison. It validates inputs first to prevent undefined behavior, then uses a conditional statement to check if `num1 + num2 === num3`.

**Time Complexity:** O(1) - constant time  
**Space Complexity:** O(1) - no additional space needed

## Example Usage

```javascript
sumEquals(2, 3, 5);   // Returns: true  (2 + 3 = 5)
sumEquals(1, 2, 4);   // Returns: false (1 + 2 ≠ 4)
sumEquals(10, 5, 15); // Returns: true  (10 + 5 = 15)
```
