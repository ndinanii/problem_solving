let num1;
let num2;

function absoluteDifference(num1, num2) {
    if (num1 === undefined || num2 === undefined) {
        return "Please provide two numbers.";
    }
    if (num1 > num2) {
        return num1 - num2;
    }
    if (num2 > num1) {
        return num2 - num1;
    }
    return 0; // If both numbers are equal
}
console.log(absoluteDifference(10, 10));


// Second Method: Quicker way to calculate absolute difference
function absoluteDifferenceQuick(num1, num2) {
    if (num1 === undefined || num2 === undefined) {
        return "Please provide two numbers.";
    }
    return Math.abs(num1 - num2);

}
console.log(absoluteDifferenceQuick(2, 8))


//  SUM EQUALS: PROBLEM



function sumEquals(num1, num2, num3){
    if (num1 === undefined || num2 === undefined || num3 === undefined) {
        return "Please provide three numbers."
    }
    if (num1 + num2 === num3){
        return true;
    }
        else return false;  
}
console.log(sumEquals(2, 3, 5)); // true
console.log(sumEquals(1, 2, 4)); // false

// Given three Integers a, b, and c, 
// return true if they are in ascending order. 
// For our purposes, two equal numbers will be considered to be in an ascending order.

function ascendingOrder(a, b, c) {
    if (a <= b && b <= c) {
        return true;
    }
    else return false;
}
console.log(ascendingOrder(1, 2, 3)); // true
console.log(ascendingOrder(3, 2, 1)); // false


// Given a work, prepend it with the correct indefinite article ("a" or "an") 
// followed by a space based on the following rule: words starting with a vowel (a, e, i, o, or u) are prepended with "an", 
// while words starting with any other letter are prepended with "a".

function aOrAn(word) {
    if (word[0] === 'a' || word[0] === 'e' || word[0] === 'i' || word[0] === 'o' || word[0] === 'u') {
        return "an " + word;
    }
    else {
        return "a " + word;
    }
}
console.log(aOrAn("apple")); // an apple
console.log(aOrAn("banana")); // a banana


//isBoolean function
let isBoolean;
function booWho(isBoolean){
  if (isBoolean === true || isBoolean === false) return true;
  else return false;
};

console.log()