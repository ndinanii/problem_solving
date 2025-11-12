# Problem 01: Absolute Difference

## Problem Description

Create a function that calculates the absolute difference between two numbers. The absolute difference is always positive, regardless of which number is larger.

## Requirements

- Function should accept two numbers as parameters
- Return the absolute (positive) difference between them
- Handle cases where numbers are equal (return 0)
- Validate that both parameters are provided

## Approach

### Method 1: Manual Comparison
1. Check if both parameters exist
2. Compare the two numbers
3. Subtract the smaller from the larger
4. Return the result

### Method 2: Using Math.abs()
1. Validate parameters
2. Use `Math.abs(num1 - num2)` to get the absolute value directly
3. This is more concise and handles the logic internally

## Solution Logic

The solution uses conditional statements to compare which number is larger and performs the appropriate subtraction. The alternative solution leverages JavaScript's built-in `Math.abs()` method which automatically converts any negative result to positive.

**Time Complexity:** O(1) - constant time  
**Space Complexity:** O(1) - no additional space needed

## Example Usage

```javascript
absoluteDifference(10, 5);  // Returns: 5
absoluteDifference(3, 8);   // Returns: 5
absoluteDifference(7, 7);   // Returns: 0
```
