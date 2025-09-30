// build a function that returns an array consisting
// of the largest number from each provided sub-array.

function largestOfAll (subArray){
    let finalArray = [];

    // Iterate through each subArray, return largest number inside
    for (let number of subArray){
        // In each instance, find largest number, return it, push it to finalArray
        
        let largestNumInArray = Math.max(...number);
        finalArray.push(largestNumInArray)       
    }

    return finalArray;
}

let subArray = [[1,2,3,4,5], [2,4,6,8], [3,6,9,12], [4,8,12,16]]
console.log(largestOfAll(subArray))

