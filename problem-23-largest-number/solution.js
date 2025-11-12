/**
 * Largest Number Finder
 * 
 * Returns an array consisting of the largest number from each provided sub-array.
 * Uses Math.max() with spread operator to find the maximum value in each sub-array.
 */

function largestOfAll(subArray) {
    // Array to store the largest numbers
    let finalArray = [];
    
    // Iterate through each sub-array
    for (let number of subArray) {
        // Find the largest number in the current sub-array
        // Math.max() returns the largest of the given numbers
        // ...number spreads the array elements as individual arguments
        let largestNumInArray = Math.max(...number);
        
        // Add the largest number to the final array
        finalArray.push(largestNumInArray);
    }
    
    return finalArray;
}

// Test cases
let subArray = [[1, 2, 3, 4, 5], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]];
console.log(largestOfAll(subArray));  // [5, 8, 12, 16]

console.log(largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// Expected: [27, 5, 39, 1001]

console.log(largestOfAll([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
// Expected: [9, 35, 97, 1000000]
