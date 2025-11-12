# Problem 25: First Element Finder

## Problem Description

Create a function that looks through an array and returns the first element that passes a "truth test" (a test function). If no element passes the test, return `undefined`.

## Requirements

- Function accepts two parameters:
  - `arr`: The array to search through
  - `test`: A callback function that tests each element
- Iterate through the array
- Apply the test function to each element
- Return the first element where `test(element)` returns `true`
- Return `undefined` if no element passes the test

## Approach

1. Loop through each element in the array
2. Call the test function with the current element
3. If test returns true, immediately return that element
4. If loop completes without finding a match, return `undefined`

## Solution Logic

### Callback Function (test)
```javascript
function findElement(arr, test)
```

The `test` parameter is a **callback function** - a function passed as an argument to another function.

### Testing Each Element
```javascript
if (test(element))
```

We call the test function with the current element:
- If `test(element)` returns `true` → element passes
- If `test(element)` returns `false` → element fails

### Early Return Pattern
```javascript
return element;  // Immediately returns when condition met
```

We don't need to check remaining elements once we find a match. This makes the function efficient.

**Time Complexity:** O(n) worst case, O(1) best case (if first element matches)  
**Space Complexity:** O(1) - no additional storage

## Example Walkthrough

```javascript
findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0)
```

| Element | Test: num % 2 === 0 | Result |
|---------|---------------------|---------|
| 1 | 1 % 2 = 1 (false) | Continue |
| 3 | 3 % 2 = 1 (false) | Continue |
| 5 | 5 % 2 = 1 (false) | Continue |
| 8 | 8 % 2 = 0 (true) | ✓ Return 8 |

Remaining elements (9, 10) are not checked.

## Example Usage

### Find first even number
```javascript
findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);
// Returns: 8
```

### Find first number greater than 10
```javascript
findElement([1, 3, 5, 9], num => num > 10);
// Returns: undefined
```

### Find first string with length > 5
```javascript
findElement(["hi", "hello", "goodbye"], str => str.length > 5);
// Returns: "goodbye"
```

### Find first object with specific property
```javascript
const users = [
    {name: "John", age: 20},
    {name: "Jane", age: 30},
    {name: "Bob", age: 25}
];
findElement(users, user => user.age > 25);
// Returns: {name: "Jane", age: 30}
```

## What is a Callback Function?

A callback is a function passed as an argument to another function.

### Example:
```javascript
// The test function is a callback
function isEven(num) {
    return num % 2 === 0;
}

findElement([1, 2, 3], isEven);
```

### Or using arrow function (more common):
```javascript
findElement([1, 2, 3], num => num % 2 === 0);
```

## Built-in Alternative: Array.find()

JavaScript has a built-in method that does exactly this:

```javascript
const arr = [1, 3, 5, 8, 9];
const result = arr.find(num => num % 2 === 0);
// Returns: 8
```

Our `findElement()` function reimplements `Array.prototype.find()` to understand how it works!

## Comparison with Other Array Methods

| Method | Returns | Use Case |
|--------|---------|----------|
| `find()` | First matching element or undefined | Get the element |
| `findIndex()` | Index of first match or -1 | Get the position |
| `filter()` | Array of ALL matching elements | Get all matches |
| `some()` | true/false | Check if ANY match |
| `every()` | true/false | Check if ALL match |

## Alternative Implementations

### Method 1: Using for loop with index
```javascript
function findElement(arr, test) {
    for (let i = 0; i < arr.length; i++) {
        if (test(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}
```

### Method 2: Using Array.find() (native)
```javascript
function findElement(arr, test) {
    return arr.find(test);
}
```

### Method 3: Using Array.filter() then accessing first
```javascript
function findElement(arr, test) {
    const matches = arr.filter(test);
    return matches.length > 0 ? matches[0] : undefined;
}
```
❌ Less efficient: checks all elements even after finding match

### Method 4: Recursive
```javascript
function findElement(arr, test, index = 0) {
    if (index >= arr.length) return undefined;
    if (test(arr[index])) return arr[index];
    return findElement(arr, test, index + 1);
}
```

## Complex Test Functions

### Multiple conditions
```javascript
findElement(numbers, num => num > 10 && num < 20 && num % 2 === 0);
```

### Using external variables
```javascript
const threshold = 100;
findElement(numbers, num => num > threshold);
```

### Complex object testing
```javascript
findElement(users, user => 
    user.age >= 18 && 
    user.country === 'USA' && 
    user.isActive
);
```

## Real-World Applications

This pattern is fundamental in:

1. **User Search**:
```javascript
const user = findElement(users, u => u.id === requestedId);
```

2. **Finding Available Resource**:
```javascript
const availableRoom = findElement(rooms, room => !room.isOccupied);
```

3. **Configuration Lookup**:
```javascript
const setting = findElement(settings, s => s.key === 'theme');
```

4. **Validation**:
```javascript
const invalidField = findElement(fields, field => !field.isValid);
```

5. **Game Development**:
```javascript
const collidingObject = findElement(objects, obj => 
    checkCollision(player, obj)
);
```

6. **Data Processing**:
```javascript
const firstError = findElement(results, result => result.status === 'error');
```

## Edge Cases

```javascript
findElement([], num => num > 0);           // undefined (empty array)
findElement([1, 2, 3], num => false);      // undefined (no match)
findElement([1, 2, 3], num => true);       // 1 (first element)
findElement([null, 2, 3], num => num);     // 2 (falsy values)
```

## Callback Function Patterns

### Arrow Functions (Short)
```javascript
arr.find(x => x > 5)
```

### Arrow Functions (Block)
```javascript
arr.find(x => {
    const doubled = x * 2;
    return doubled > 10;
})
```

### Regular Functions
```javascript
arr.find(function(x) {
    return x > 5;
})
```

### Named Functions
```javascript
function isPositive(num) {
    return num > 0;
}
arr.find(isPositive)
```

## Key Concepts

- **Higher-order functions**: Functions that accept other functions as arguments
- **Callbacks**: Functions passed as arguments
- **Truth testing**: Boolean evaluation of conditions
- **Early returns**: Exiting as soon as condition is met
- **Predicates**: Functions that return boolean values

## Best Practices

1. **Use descriptive test function names**:
```javascript
const isEven = num => num % 2 === 0;
findElement(numbers, isEven);
```

2. **Keep test functions pure** (no side effects):
```javascript
// Good ✓
arr.find(x => x > 5)

// Bad ✗ (mutating external state)
let count = 0;
arr.find(x => {
    count++;  // Side effect!
    return x > 5;
})
```

3. **Use built-in Array.find() in production**:
```javascript
// Preferred
const result = arr.find(test);

// Educational only
const result = findElement(arr, test);
```

## Interview Tips

This problem tests understanding of:
- Callback functions
- Array iteration
- Early returns
- Functional programming concepts
- Problem-solving approach

Common follow-up questions:
- "How would you find ALL matching elements?" → Use `filter()`
- "How would you find the INDEX?" → Use `findIndex()`
- "What if multiple elements match?" → Only first is returned
