# Problem 23: Largest Number

## Problem Description

Create a function that returns an array consisting of the largest number from each provided sub-array. Given an array of arrays (2D array), find the maximum value in each inner array.

## Requirements

- Function accepts an array of sub-arrays (2D array)
- Each sub-array contains numbers
- Return a new array containing the largest number from each sub-array
- Maintain the order of sub-arrays

## Approach

1. Create an empty array to store results
2. Loop through each sub-array
3. Find the largest number in the current sub-array
4. Add that largest number to the results array
5. Return the results array

## Solution Logic

### Math.max() Function
```javascript
Math.max(1, 2, 3, 4, 5)  // Returns: 5
```

`Math.max()` accepts multiple arguments and returns the largest one.

**Problem**: We have an array, not individual arguments!

### Spread Operator (...) to the Rescue
```javascript
let arr = [1, 2, 3, 4, 5];
Math.max(...arr)  // Equivalent to: Math.max(1, 2, 3, 4, 5)
```

The spread operator (`...`) "spreads out" array elements as individual arguments.

### Complete Solution
```javascript
let largestNumInArray = Math.max(...number);
```

This line:
1. Takes the array `number`
2. Spreads it into individual arguments with `...`
3. Passes those arguments to `Math.max()`
4. Returns the largest value

**Time Complexity:** O(n × m) where n = number of sub-arrays, m = average sub-array length  
**Space Complexity:** O(n) for the result array

## Example Walkthrough

```javascript
largestOfAll([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
```

| Iteration | Sub-array | Math.max(...) | Result So Far |
|-----------|-----------|---------------|---------------|
| 1 | [1, 2, 3] | 3 | [3] |
| 2 | [4, 5, 6] | 6 | [3, 6] |
| 3 | [7, 8, 9] | 9 | [3, 6, 9] |

Final: `[3, 6, 9]`

## Example Usage

```javascript
largestOfAll([[1, 2, 3, 4, 5], [2, 4, 6, 8], [3, 6, 9, 12]]);
// Returns: [5, 8, 12]

largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39]]);
// Returns: [27, 5, 39]

largestOfAll([[-5, -2, -8], [-10, -1, -20]]);
// Returns: [-2, -1] (largest negative numbers)
```

## Alternative Implementations

### Method 1: Using reduce() inside loop
```javascript
function largestOfAll(subArray) {
    let finalArray = [];
    for (let arr of subArray) {
        let max = arr.reduce((a, b) => Math.max(a, b));
        finalArray.push(max);
    }
    return finalArray;
}
```

### Method 2: Using map() (most concise)
```javascript
function largestOfAll(subArray) {
    return subArray.map(arr => Math.max(...arr));
}
```
✅ This is the preferred approach in modern JavaScript!

### Method 3: Manual comparison (no Math.max)
```javascript
function largestOfAll(subArray) {
    let finalArray = [];
    for (let arr of subArray) {
        let max = arr[0];  // Assume first element is largest
        for (let num of arr) {
            if (num > max) {
                max = num;
            }
        }
        finalArray.push(max);
    }
    return finalArray;
}
```

### Method 4: Using sort()
```javascript
function largestOfAll(subArray) {
    return subArray.map(arr => arr.slice().sort((a, b) => b - a)[0]);
}
```
❌ Less efficient: O(n log n) due to sorting

## The Spread Operator Explained

### What it does
Expands an iterable (array, string) into individual elements.

### Examples:
```javascript
// In function calls
Math.max(...[1, 2, 3])  // Same as: Math.max(1, 2, 3)

// In array literals
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = [...arr1, ...arr2];  // [1, 2, 3, 4]

// Copying arrays
let original = [1, 2, 3];
let copy = [...original];  // Creates a new array

// In destructuring
let [first, ...rest] = [1, 2, 3, 4];  // first = 1, rest = [2, 3, 4]
```

## Edge Cases

```javascript
largestOfAll([[]]);                    // [-Infinity] (Math.max of empty array)
largestOfAll([[5]]);                   // [5] (single element)
largestOfAll([[-5, -10, -15]]);        // [-5] (all negative)
largestOfAll([[0, 0, 0]]);             // [0] (all zeros)
largestOfAll([[1.5, 2.7, 3.2]]);       // [3.2] (decimals)
```

## Handling Empty Sub-arrays

If sub-arrays might be empty, add validation:
```javascript
function largestOfAll(subArray) {
    return subArray.map(arr => {
        if (arr.length === 0) return null;  // or undefined, or 0
        return Math.max(...arr);
    });
}
```

## Real-World Applications

Finding maximum values in grouped data is common in:

1. **Data Analysis**:
```javascript
// Find highest sales per region
const salesByRegion = [[100, 150, 120], [200, 180, 210], [90, 110, 100]];
const maxSalesPerRegion = largestOfAll(salesByRegion);
```

2. **Game Development**:
```javascript
// Find highest score per level
const scoresByLevel = [[50, 60, 45], [70, 80, 75], [90, 85, 95]];
```

3. **Temperature Monitoring**:
```javascript
// Daily max temperatures per week
const weeklyTemps = [[20, 22, 19], [23, 25, 21], [18, 20, 22]];
```

4. **Performance Metrics**:
```javascript
// Max response time per server
const serverResponseTimes = [[100, 120, 110], [90, 95, 100]];
```

5. **Financial Data**:
```javascript
// Highest stock price each month
const monthlyPrices = [[50, 55, 52], [60, 65, 63]];
```

## Math.max() Limitations

```javascript
Math.max(...veryLargeArray);  // Can cause "Maximum call stack size exceeded"
```

For very large arrays (> ~100,000 elements), use manual comparison:
```javascript
function findMax(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
    }
    return max;
}
```

## Related Array Methods

- `Math.min(...arr)`: Find smallest value
- `Array.reduce()`: Custom aggregation
- `Array.sort()`: Order elements
- `Array.filter()`: Get elements matching criteria

## Best Practice: Modern Approach

```javascript
const largestOfAll = subArray => subArray.map(arr => Math.max(...arr));
```

This one-liner using arrow function and `map()` is:
- ✅ Concise and readable
- ✅ Functional programming style
- ✅ Industry standard
- ✅ Easy to test and maintain
