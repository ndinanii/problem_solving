# Problem 03: Ascending Order

## Problem Description

Create a function that checks if three integers are in ascending (non-decreasing) order. Equal consecutive numbers are considered valid.

## Requirements

- Function should accept three integers as parameters
- Return `true` if they are in ascending order
- Return `false` if they are not in ascending order
- Two equal numbers are allowed (non-strictly ascending)

## Approach

1. Compare the first number with the second (`a <= b`)
2. Compare the second number with the third (`b <= c`)
3. Both conditions must be true for ascending order
4. Use logical AND (`&&`) to combine conditions

## Solution Logic

The solution uses a single return statement with chained comparisons. By using `<=` instead of `<`, we allow equal consecutive values. The logical AND operator ensures both conditions must be satisfied.

**Key insight:** Using `<=` makes this a "non-decreasing" check, which is what we want when equal values are acceptable.

**Time Complexity:** O(1) - constant time  
**Space Complexity:** O(1) - no additional space needed

## Example Usage

```javascript
ascendingOrder(1, 2, 3);    // Returns: true
ascendingOrder(1, 1, 2);    // Returns: true (equal is okay)
ascendingOrder(3, 2, 1);    // Returns: false
ascendingOrder(5, 10, 10);  // Returns: true
```
