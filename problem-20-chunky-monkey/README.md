# Problem 20: Chunky Monkey

## Problem Description

Split an array into smaller arrays (chunks) of a specified size. If the array can't be divided evenly, the final chunk should contain the remaining elements.

## Requirements

- Function accepts an array and a chunk size
- Return a new array containing sub-arrays (chunks)
- Each chunk should have the specified size
- Last chunk may be smaller if array length isn't evenly divisible
- Original array should not be modified

## Approach

1. Create an empty result array to store chunks
2. Loop through the array, incrementing by chunk size each iteration
3. Use `slice()` to extract chunks from current position
4. Push each chunk to the result array
5. Return the result array

## Solution Logic

### Loop with Custom Increment
```javascript
for (let i = 0; i < arr.length; i += size)
```

Instead of incrementing by 1 (`i++`), we jump by `size`:
- First iteration: i = 0
- Second iteration: i = size
- Third iteration: i = size * 2
- And so on...

This positions us at the start of each chunk.

### Slice for Extraction
```javascript
arr.slice(i, i + size)
```

`slice(start, end)`:
- Extracts elements from index `start` to `end` (exclusive)
- Returns a new array (doesn't modify original)
- If `end` exceeds array length, slice stops at the end
  - This naturally handles the last chunk being smaller!

### Building the Result
```javascript
result.push(chunk)
```

Each extracted chunk is added to the result array, building a 2D array (array of arrays).

**Time Complexity:** O(n) where n is array length  
**Space Complexity:** O(n) for the new array created

## Example Walkthrough

```javascript
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
```

| Iteration | i | slice(i, i+2) | Result So Far |
|-----------|---|---------------|---------------|
| 1 | 0 | [0, 1] | [[0, 1]] |
| 2 | 2 | [2, 3] | [[0, 1], [2, 3]] |
| 3 | 4 | [4, 5] | [[0, 1], [2, 3], [4, 5]] |

Final: `[[0, 1], [2, 3], [4, 5]]`

### Uneven Division Example
```javascript
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
```

| Iteration | i | slice(i, i+3) | Result So Far |
|-----------|---|---------------|---------------|
| 1 | 0 | [0, 1, 2] | [[0, 1, 2]] |
| 2 | 3 | [3, 4, 5] | [[0, 1, 2], [3, 4, 5]] |
| 3 | 6 | [6] | [[0, 1, 2], [3, 4, 5], [6]] |

The last chunk only has 1 element because that's all that's left!

## Example Usage

```javascript
chunkArrayInGroups([1, 2, 3, 4, 5], 2);
// Returns: [[1, 2], [3, 4], [5]]

chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g"], 3);
// Returns: [["a", "b", "c"], ["d", "e", "f"], ["g"]]

chunkArrayInGroups([1, 2, 3], 10);
// Returns: [[1, 2, 3]]  (size larger than array)
```

## Alternative Implementations

### Method 1: Using splice() (modifies original)
```javascript
function chunkArrayInGroups(arr, size) {
    const result = [];
    const copy = [...arr];  // Create copy to avoid modifying original
    while (copy.length) {
        result.push(copy.splice(0, size));
    }
    return result;
}
```

### Method 2: Recursive approach
```javascript
function chunkArrayInGroups(arr, size) {
    if (arr.length === 0) return [];
    return [arr.slice(0, size), ...chunkArrayInGroups(arr.slice(size), size)];
}
```

### Method 3: Using reduce()
```javascript
function chunkArrayInGroups(arr, size) {
    return arr.reduce((result, item, index) => {
        const chunkIndex = Math.floor(index / size);
        if (!result[chunkIndex]) {
            result[chunkIndex] = [];
        }
        result[chunkIndex].push(item);
        return result;
    }, []);
}
```

## Edge Cases

```javascript
chunkArrayInGroups([], 2);           // []  (empty array)
chunkArrayInGroups([1, 2], 5);       // [[1, 2]]  (size > length)
chunkArrayInGroups([1, 2, 3], 1);    // [[1], [2], [3]]  (size = 1)
chunkArrayInGroups([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]  (perfect division)
```

## Why "Chunky Monkey"?

The name is a playful reference from freeCodeCamp, making the problem more memorable. It's also known as:
- Array chunking
- Array partitioning
- Array splitting
- Batch processing

## Real-World Applications

Array chunking is used extensively in:

1. **Pagination**: Display 10 items per page
```javascript
const items = [...]; // 100 items
const pages = chunkArrayInGroups(items, 10); // 10 pages
```

2. **Batch Processing**: Process large datasets in smaller batches
```javascript
const data = [...]; // Large dataset
const batches = chunkArrayInGroups(data, 1000);
batches.forEach(batch => processB atch(batch));
```

3. **Grid Layouts**: Arrange items in rows
```javascript
const products = [...];
const rows = chunkArrayInGroups(products, 3); // 3 items per row
```

4. **API Rate Limiting**: Send requests in groups
```javascript
const requests = [...];
const groups = chunkArrayInGroups(requests, 5); // 5 requests per batch
```

5. **Image Galleries**: Row-based image layouts

6. **Data Visualization**: Grouping data points

7. **File Upload**: Split large files into chunks

## Performance Considerations

For very large arrays:
- The slice method creates new arrays (memory overhead)
- Consider streaming or iterators for massive datasets
- For repeated chunking, cache results if possible
