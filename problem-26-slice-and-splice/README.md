# Problem 26: Slice and Splice

## Problem Description

Copy all elements from the first array into the second array, starting at a specified index position. The original arrays should not be modified. This combines the concepts of `slice()` (copying) and `splice()` (inserting).

## Requirements

- Function accepts three parameters:
  - `array1`: Source array (elements to insert)
  - `array2`: Target array (where to insert)
  - `index`: Position in array2 to insert elements
- Copy all elements from array1 into array2 at the specified index
- Return the resulting array
- **Do not modify** the original arrays
- Maintain the order of elements from both arrays

## Approach

1. Create a copy of array2 (to avoid modifying original)
2. Use `splice()` to insert all elements from array1 at the specified index
3. Return the modified copy

## Solution Logic

### Step 1: Copy Array2
```javascript
let copyArray2 = array2.slice();
```

`slice()` with no arguments creates a shallow copy of the entire array. This ensures we don't modify the original array2.

### Step 2: Insert Elements
```javascript
copyArray2.splice(index, 0, ...array1);
```

Let's break this down:

**splice(start, deleteCount, ...items)**
- `start`: Position to start modifying the array (our `index`)
- `deleteCount`: Number of elements to remove (0 = don't remove anything)
- `...items`: Elements to insert (we use spread to insert all of array1)

**The Spread Operator (...)**
```javascript
...array1
```

Spreads array1's elements as individual arguments:
- `splice(1, 0, ...array1:[1,2,3])` becomes `splice(1, 0, 1, 2, 3)`

### Why "Franken-Splice"?

Like Frankenstein's monster, we're "splicing" together parts from different sources to create something new!

**Time Complexity:** O(n + m) where n = array1 length, m = array2 length  
**Space Complexity:** O(n + m) for the new array

## Example Walkthrough

```javascript
frankenSplice([1, 2, 3], [4, 5], 1)
```

1. **Copy array2**: `copyArray2 = [4, 5]`
2. **splice(1, 0, 1, 2, 3)**:
   - Start at index 1
   - Remove 0 elements
   - Insert 1, 2, 3

Visual representation:
```
Original: [4, 5]
           ↓ insert at index 1
Result:   [4, 1, 2, 3, 5]
```

### Another Example
```javascript
frankenSplice(["a", "b"], ["x", "y", "z"], 2)
```

```
Original: ["x", "y", "z"]
                   ↓ insert at index 2
Result:   ["x", "y", "a", "b", "z"]
```

## Example Usage

```javascript
frankenSplice([1, 2, 3], [4, 5], 1);
// Returns: [4, 1, 2, 3, 5]

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
// Returns: ["head", "shoulders", "claw", "tentacle", "knees", "toes"]

frankenSplice([1, 2], ["a", "b"], 0);
// Returns: [1, 2, "a", "b"]

frankenSplice([1, 2], ["a", "b"], 2);
// Returns: ["a", "b", 1, 2]
```

## Understanding slice() vs splice()

### slice() - Extract/Copy (Non-mutating)
```javascript
const arr = [1, 2, 3, 4, 5];
const copy = arr.slice(1, 3);  // [2, 3]
console.log(arr);              // [1, 2, 3, 4, 5] (unchanged)
```

- **Purpose**: Extract portion of array or copy
- **Mutates original**: ❌ No
- **Returns**: New array

### splice() - Modify (Mutating)
```javascript
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, 'a', 'b');  // Removes [3], inserts 'a', 'b'
console.log(arr);            // [1, 2, 'a', 'b', 4, 5] (changed!)
```

- **Purpose**: Add/remove elements
- **Mutates original**: ✅ Yes
- **Returns**: Array of removed elements

## Why We Need slice()

Without copying first:
```javascript
function frankenSpliceBad(array1, array2, index) {
    array2.splice(index, 0, ...array1);  // Modifies original array2!
    return array2;
}

const arr = [4, 5];
frankenSpliceBad([1, 2, 3], arr, 1);
console.log(arr);  // [4, 1, 2, 3, 5] - Original is changed! ❌
```

With copying:
```javascript
const arr = [4, 5];
frankenSplice([1, 2, 3], arr, 1);
console.log(arr);  // [4, 5] - Original unchanged! ✓
```

## Alternative Implementations

### Method 1: Using concat() and slice()
```javascript
function frankenSplice(array1, array2, index) {
    const before = array2.slice(0, index);
    const after = array2.slice(index);
    return before.concat(array1, after);
}
```

### Method 2: Using spread operator
```javascript
function frankenSplice(array1, array2, index) {
    return [
        ...array2.slice(0, index),
        ...array1,
        ...array2.slice(index)
    ];
}
```

### Method 3: Manual copying with loops
```javascript
function frankenSplice(array1, array2, index) {
    const result = [];
    
    // Add elements before index
    for (let i = 0; i < index; i++) {
        result.push(array2[i]);
    }
    
    // Add all elements from array1
    for (let item of array1) {
        result.push(item);
    }
    
    // Add remaining elements from array2
    for (let i = index; i < array2.length; i++) {
        result.push(array2[i]);
    }
    
    return result;
}
```

## Edge Cases

```javascript
frankenSplice([], [1, 2, 3], 1);        // [1, 2, 3] (empty array1)
frankenSplice([1, 2], [], 0);           // [1, 2] (empty array2)
frankenSplice([1, 2], [3, 4], 0);       // [1, 2, 3, 4] (insert at start)
frankenSplice([1, 2], [3, 4], 2);       // [3, 4, 1, 2] (insert at end)
frankenSplice([1, 2], [3, 4], 10);      // [3, 4, 1, 2] (index > length)
```

## Real-World Applications

Inserting elements into arrays is common in:

1. **List Management**:
```javascript
// Insert new tasks at specific position in todo list
insertTasks(newTasks, existingTasks, priority);
```

2. **DOM Manipulation**:
```javascript
// Insert HTML elements at specific positions
```

3. **Data Processing**:
```javascript
// Merge datasets at specific points
```

4. **Text Editing**:
```javascript
// Insert characters/words at cursor position
```

5. **Undo/Redo Systems**:
```javascript
// Insert actions into history at specific points
```

6. **Playlist Management**:
```javascript
// Insert songs into playlist
```

## splice() Method Deep Dive

### Syntax
```javascript
array.splice(start, deleteCount, item1, item2, ...)
```

### Examples

**Remove elements**:
```javascript
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 2);  // Removes 2 elements starting at index 2
// arr = [1, 2, 5]
```

**Insert elements**:
```javascript
const arr = [1, 2, 5];
arr.splice(2, 0, 3, 4);  // Insert 3, 4 at index 2
// arr = [1, 2, 3, 4, 5]
```

**Replace elements**:
```javascript
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 2, 'a', 'b', 'c');  // Remove 2, insert 3
// arr = [1, 2, 'a', 'b', 'c', 5]
```

## Common Mistakes

### ❌ Modifying original array
```javascript
function frankenSplice(array1, array2, index) {
    array2.splice(index, 0, ...array1);  // Mutates array2!
    return array2;
}
```

### ❌ Not using spread operator
```javascript
copyArray2.splice(index, 0, array1);  // Inserts array AS element
// Result: [4, [1,2,3], 5] instead of [4, 1, 2, 3, 5]
```

### ❌ Shallow copy issues with nested arrays
```javascript
const arr = [[1, 2], [3, 4]];
const copy = arr.slice();
copy[0][0] = 99;
console.log(arr);  // [[99, 2], [3, 4]] - Inner arrays still referenced!
```

For deep copying nested structures, use:
```javascript
const deepCopy = JSON.parse(JSON.stringify(arr));
// or
const deepCopy = structuredClone(arr);  // Modern browsers
```

## Key Concepts

- **Immutability**: Not modifying original data
- **Array copying**: Using slice() for shallow copies
- **Array insertion**: Using splice() to add elements
- **Spread operator**: Expanding arrays into individual elements
- **Method chaining**: Combining array methods

## Best Practices

1. **Always copy when needed**:
```javascript
const copy = original.slice();  // or [...original]
```

2. **Use descriptive variable names**:
```javascript
const mergedArray = frankenSplice(newItems, existingItems, insertPosition);
```

3. **Consider immutable patterns**:
```javascript
// Modern approach using spread
const result = [
    ...array2.slice(0, index),
    ...array1,
    ...array2.slice(index)
];
```

4. **Validate inputs**:
```javascript
if (!Array.isArray(array1) || !Array.isArray(array2)) {
    throw new TypeError('Arguments must be arrays');
}
```

## Interview Tips

This problem tests:
- Understanding of array methods (slice, splice)
- Immutability concepts
- Spread operator usage
- Problem-solving approach

Common follow-ups:
- "How would you deep copy nested arrays?"
- "What's the difference between slice() and splice()?"
- "Can you implement this without using splice()?"
