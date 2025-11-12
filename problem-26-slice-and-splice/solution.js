/**
 * Slice and Splice (Franken-Splice)
 * 
 * Copies each element from the first array into the second array, in order.
 * Begins inserting elements at index n of the second array.
 * Returns the resulting array without modifying the original arrays.
 */

function frankenSplice(array1, array2, index) {
    // Create a full copy of array2 to avoid modifying the original
    let copyArray2 = array2.slice();
    
    // Insert all elements from array1 into copyArray2 at the specified index
    // splice(index, 0, ...array1) means:
    // - Start at position 'index'
    // - Delete 0 elements (don't remove anything)
    // - Insert all elements from array1 using spread operator
    copyArray2.splice(index, 0, ...array1);
    
    return copyArray2;
}

// Test cases
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
// Expected: [4, 1, 2, 3, 5]

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
// Expected: ["head", "shoulders", "claw", "tentacle", "knees", "toes"]

console.log(frankenSplice([1, 2], ["a", "b"], 0));
// Expected: [1, 2, "a", "b"]

console.log(frankenSplice([1, 2], ["a", "b"], 2));
// Expected: ["a", "b", 1, 2]

// Verify original arrays are not modified
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result = frankenSplice(arr1, arr2, 1);
console.log("Result:", result);        // [4, 1, 2, 3, 5, 6]
console.log("Original arr1:", arr1);   // [1, 2, 3] (unchanged)
console.log("Original arr2:", arr2);   // [4, 5, 6] (unchanged)
