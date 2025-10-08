
// function frankenSplice (arr1, arr2, index){
    
//     // copy each element of the first array into the second array in order

//     for (let i = index; i <= arr1.length; i++){
//         arr2.push(i);
//         return arr2;
//     };


// }

// 

// Analysis --> index is how many elements from second array must come first before pushing new elements from array 1.
// Program flow: create a new copy of array 2, elements inside are based on index.
// flow... take the elements from array 1, push them to the second array, 1 by 1.
// flow... return the copy of array 2

function frankenSplice(array1, array2, index){

    
    let copyArray2 = array2.slice(0, array2[array2.length - 1] )
    const indexToInsert = index;
    copyArray2.splice(indexToInsert, 0, ...array1)
    return copyArray2;
}

console.log(frankenSplice([1,2,3], [4,5], 1)) // should return [4,1,2,3,5]


