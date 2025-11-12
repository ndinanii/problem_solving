/**
 * Factorial Calculator
 * 
 * Calculates the factorial of a number.
 * Factorial (n!) is the product of all positive integers from 1 to n.
 * 
 * Example: 5! = 5 × 4 × 3 × 2 × 1 = 120
 */

function factorialCalculator(num) {
    // Initialize factorial to 1 (multiplicative identity)
    // Starting with 0 would result in final answer being 0
    let factorial = 1;
    
    // Iterate from 1 to num (inclusive)
    for (let i = 1; i <= num; i++) {
        // Multiply factorial by current iteration number
        factorial *= i;
    }
    
    return factorial;
}

// Test cases
let num = 5;
let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);  // Factorial of 5 is 120

console.log(factorialCalculator(0));   // 1 (0! = 1 by definition)
console.log(factorialCalculator(1));   // 1 (1! = 1)
console.log(factorialCalculator(3));   // 6 (3! = 3 × 2 × 1)
console.log(factorialCalculator(7));   // 5040 (7! = 7 × 6 × 5 × 4 × 3 × 2 × 1)
