/*
create a function that looks through an array and returns the first element that passes a test function (also known as a "truth test").
The function would iterate through the array and test each element using the provided test function. 
At the end, it would return the first element where the test function returns true
*/

function findElement (arr, test){
    for (let element of arr){
        if (test(element)){
            return element;
        }
    } 
    return undefined;
}

