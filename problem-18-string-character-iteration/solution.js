/**
 * String Character Iteration
 * 
 * Demonstrates how to iterate through each character of a string
 * and print them individually.
 */

let str = "Asap Front End";

// Loop through each character in the string
// Note: Loop goes from 0 to str.length (not str.length - 1)
// This will print each character plus one 'undefined' at the end
for (let i = 0; i <= str.length; ++i) {
    console.log(str[i]);
}

/*
Output:
A
s
a
p
 
F
r
o
n
t
 
E
n
d
undefined  (because str.length is out of bounds)
*/

// Corrected version: Loop should be i < str.length
console.log("\n--- Corrected Version ---");
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
