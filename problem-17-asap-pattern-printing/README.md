# Problem 17: ASAP Pattern Printing

## Problem Description

Create a pattern printing program that prints different messages for numbers 1 through 15 based on divisibility rules. This is a variation of the classic "FizzBuzz" problem.

## Requirements

- Loop through numbers 1 to 15
- Apply the following rules:
  - If divisible by 5: print "ASAP FRONT END"
  - Else if divisible by 2 (even): print "FrontEnd"
  - Otherwise: print "ASAP"

## Approach

1. Create a loop from 1 to 15 (inclusive)
2. Check divisibility conditions in order of priority
3. Print the appropriate message based on which condition matches
4. Use modulo operator (%) to check divisibility

## Solution Logic

### Modulo Operator for Divisibility
```javascript
i % 5 === 0  // True if i is divisible by 5
i % 2 === 0  // True if i is divisible by 2 (even number)
```

The modulo operator returns the remainder after division:
- `10 % 5 = 0` (divisible, no remainder)
- `11 % 5 = 1` (not divisible, remainder of 1)

### Order of Conditions Matters!

The conditions are checked with **if-else if-else**:
1. First check divisibility by 5
2. Then check divisibility by 2
3. Finally, default to "ASAP"

**Why this order?** Numbers divisible by 5 are also sometimes even (like 10), but we want the "divisible by 5" rule to take priority.

### Pre-increment vs Post-increment
```javascript
++i vs i++
```
Both work the same in this loop. `++i` (pre-increment) increments before evaluation, but in a standard for loop, it makes no practical difference.

**Time Complexity:** O(1) - fixed 15 iterations  
**Space Complexity:** O(1) - no additional data structures

## Example Output

```
ASAP           (1 - not divisible by 2 or 5)
FrontEnd       (2 - divisible by 2)
ASAP           (3 - not divisible by 2 or 5)
FrontEnd       (4 - divisible by 2)
ASAP FRONT END (5 - divisible by 5)
FrontEnd       (6 - divisible by 2)
ASAP           (7 - not divisible by 2 or 5)
FrontEnd       (8 - divisible by 2)
ASAP           (9 - not divisible by 2 or 5)
ASAP FRONT END (10 - divisible by 5, takes priority over 2)
ASAP           (11 - not divisible by 2 or 5)
FrontEnd       (12 - divisible by 2)
ASAP           (13 - not divisible by 2 or 5)
FrontEnd       (14 - divisible by 2)
ASAP FRONT END (15 - divisible by 5)
```

## Pattern Analysis

- **"ASAP FRONT END"** appears: 3 times (5, 10, 15)
- **"FrontEnd"** appears: 6 times (2, 4, 6, 8, 12, 14)
- **"ASAP"** appears: 6 times (1, 3, 7, 9, 11, 13)

## Variations and Extensions

### FizzBuzz Classic
This is similar to the classic FizzBuzz problem:
```javascript
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}
```

### Generalized Version
Make it work for any range:
```javascript
function printPattern(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 5 === 0) console.log("ASAP FRONT END");
        else if (i % 2 === 0) console.log("FrontEnd");
        else console.log("ASAP");
    }
}
```

### Return Array Instead of Console
```javascript
function generatePattern(limit) {
    const result = [];
    for (let i = 1; i <= limit; i++) {
        if (i % 5 === 0) result.push("ASAP FRONT END");
        else if (i % 2 === 0) result.push("FrontEnd");
        else result.push("ASAP");
    }
    return result;
}
```

## Educational Value

This problem teaches:
- **Loops**: Iterating through a range of numbers
- **Conditionals**: Multiple if-else branches
- **Modulo operator**: Checking divisibility
- **Logical thinking**: Order of condition evaluation matters
- **Pattern recognition**: Understanding output patterns

## Interview Context

Pattern printing problems like this are common in coding interviews because they test:
- Basic programming constructs
- Logical thinking
- Attention to detail (condition order)
- Code clarity and organization

## Real-World Applications

While this specific pattern is educational, similar logic appears in:
- **Scheduling systems**: Different actions on specific intervals
- **Game development**: Different events on certain frames/ticks
- **Data processing**: Categorizing items based on properties
- **Batch processing**: Handling items differently based on index/position
