/**
 * Chunky Monkey Algorithm
 * 
 * Splits an array into groups (chunks) of a specified size.
 * Also known as: chunk array, split array, group array.
 */

function chunkArrayInGroups(arr, size) {
    // Array to store the chunked sub-arrays
    const result = [];
    
    // Iterate through the array, jumping by 'size' each time
    for (let i = 0; i < arr.length; i += size) {
        // Extract a chunk from current position to (current + size)
        const chunk = arr.slice(i, i + size);
        
        // Add the chunk to the result array
        result.push(chunk);
    }
    
    return result;
}

// Test cases
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
// Expected: [[0, 1], [2, 3], [4, 5]]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
// Expected: [[0, 1, 2], [3, 4, 5], [6]]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
// Expected: [[0, 1, 2, 3], [4, 5, 6, 7], [8]]

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// Expected: [["a", "b"], ["c", "d"]]
