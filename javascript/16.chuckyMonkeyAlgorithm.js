function chunkArrayInGroups (arr, size){
    // Take the given array compare the number of elements to num
    // use value of num to break the array and create a new 

    const result = [];

    for (let i = 0; i < arr.length; i += size) {
        const chunk = arr.slice(i, i + size);
        result.push(chunk);
    }

    return result;

}