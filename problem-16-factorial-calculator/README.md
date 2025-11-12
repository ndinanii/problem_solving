# Problem 16: Factorial Calculator

## Problem Description

Calculate the factorial of a given number. The factorial of n (written as n!) is the product of all positive integers from 1 to n.

## Requirements

- Function should accept a non-negative integer
- Return the factorial of that number
- Handle edge case: 0! = 1
- Use iterative approach (loop)

## Mathematical Background

### What is a Factorial?

Factorial is denoted by `n!` and defined as:
```
n! = n × (n-1) × (n-2) × ... × 3 × 2 × 1
```

### Examples:
- `0! = 1` (by definition)
- `1! = 1`
- `2! = 2 × 1 = 2`
- `3! = 3 × 2 × 1 = 6`
- `4! = 4 × 3 × 2 × 1 = 24`
- `5! = 5 × 4 × 3 × 2 × 1 = 120`
- `10! = 3,628,800`

### Why is 0! = 1?

By mathematical convention, 0! is defined as 1. This makes many formulas work correctly and maintains consistency in combinatorics and other areas of mathematics.

## Approach

1. Initialize a `factorial` variable to 1
2. Loop from 1 to n (inclusive)
3. Multiply `factorial` by each number in the loop
4. Return the final result

## Solution Logic

### Starting Value: Why 1?
```javascript
let factorial = 1;
```

We start with 1 because:
- 1 is the multiplicative identity (1 × x = x)
- Starting with 0 would make everything 0
- This naturally handles 0! = 1 (loop doesn't run, returns 1)

### Loop Structure
```javascript
for (let i = 1; i <= num; i++)
```

- Starts at 1 (not 0, since multiplying by 0 would give 0)
- Goes up to and includes `num`
- Each iteration multiplies the running total

### Multiplication Assignment
```javascript
factorial *= i;
```

Equivalent to: `factorial = factorial * i`

This accumulates the product:
- After iteration 1: factorial = 1
- After iteration 2: factorial = 2
- After iteration 3: factorial = 6
- After iteration 4: factorial = 24
- After iteration 5: factorial = 120

**Time Complexity:** O(n) - must iterate n times  
**Space Complexity:** O(1) - only uses two variables

## Example Usage

```javascript
factorialCalculator(5);   // Returns: 120
factorialCalculator(0);   // Returns: 1
factorialCalculator(10);  // Returns: 3628800
```

## Alternative Implementations

### Recursive Approach
```javascript
function factorialRecursive(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}
```

### Using Array.reduce()
```javascript
function factorialReduce(n) {
    if (n === 0) return 1;
    return Array.from({length: n}, (_, i) => i + 1)
                .reduce((acc, val) => acc * val, 1);
}
```

## Limitations

Factorials grow **extremely fast**:
- `20! = 2,432,902,008,176,640,000` (2.4 quintillion)
- JavaScript's `Number` type has precision limits
- For large numbers (> 170), result becomes `Infinity`
- Consider using BigInt for larger factorials:

```javascript
function factorialBigInt(n) {
    let factorial = 1n;  // BigInt literal
    for (let i = 1n; i <= BigInt(n); i++) {
        factorial *= i;
    }
    return factorial;
}
```

## Real-World Applications

Factorials are used in:
- **Combinatorics**: Calculating permutations and combinations
- **Probability**: Statistical calculations
- **Series expansions**: Taylor and Maclaurin series (e.g., e^x, sin(x))
- **Algorithms**: Analyzing complexity (e.g., traveling salesman problem)
- **Cryptography**: Key generation and prime number operations

## Fun Facts

- The factorial of 52 (52!) represents the number of ways to arrange a deck of cards
- 69! is the largest factorial that produces a finite result in JavaScript's Number type
- Factorials appear in the formula for e: `e = 1/0! + 1/1! + 1/2! + 1/3! + ...`
