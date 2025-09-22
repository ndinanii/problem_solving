// Given a number (num)
// Iterate through the number, going down, until 1 is reached.
// With each iteration, multiply by previous iteration.
// Store the value in factorial (factorial)
// return factorial when done iterating. 


let num = 5;
function factorialCalculator (num) { 
    let factorial = 1;

    for (let i = 1; i <= num; i++){
        factorial *= i;
    }
    
    return factorial;
}

let factorial = factorialCalculator(num)

let resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg)