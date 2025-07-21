/* Build a Fortune Teller

In this lab, you will define five fortunes and randomly select one of them to display the fortune to the user.
Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:
You should initialize the five variables fortune1, fortune2, fortune3, fortune4, and fortune5 with a string value of your choice. 
You should select a random number between 1 and 5, inclusive, and assign it to the variable randomNumber.

You should create a selectedFortune variable and assign the appropriate fortune based on these rules:
If randomNumber is 1, assign the value of fortune1 to selectedFortune.
If randomNumber is 2, assign the value of fortune2 to selectedFortune.
If randomNumber is 3, assign the value of fortune3 to selectedFortune.
If randomNumber is 4, assign the value of fortune4 to selectedFortune.
If randomNumber is 5, assign the value of fortune5 to selectedFortune.
You should log the selectedFortune to the console. 

*/


                                    //solution 

// Initialise the fortune variables, what the output will be.

const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

// Finding a random number between 1 and 5, inclusive. 
const randomNumber = Math.floor(Math.random() * (5)) + 1; /* Combining Math.floor and Math.random allows us
to limit and control the numbers to look for. From (Math.floor(Math.random() * (max - min + 1) + min) */

// Initialise variable for what happens when a random number is selected
let selectedFortune;

// Conditions for what the output will be on the console, where the random number corresponds to the fortune.
    if (randomNumber === 1){
        selectedFortune = fortune1;
    }
    if (randomNumber === 2){
        selectedFortune = fortune2;
    }
    if (randomNumber === 3){
        selectedFortune = fortune3;
    }
    if (randomNumber === 4){
        selectedFortune = fortune4;
    }
    if (randomNumber === 5){
        selectedFortune = fortune5;
    }

console.log(selectedFortune) //Output




// Solution 2

// First We store the fortunes (Place to keep my 5 unique fortunes).

const fortunes = [
    "You will have a great day!",
    "A wonderful suprise awaits you!",
    "Your hardwork will pay off soon.",
    "You will meet someone interesting this week.",
    "Good things are coming your way."
]; // The array is indexed from 0 to 4, each string has an index.

// Secondly, we generate a random number to correspond to index (0 to 4)
const randomNum = Math.floor(Math.random() * fortunes.length); 
// The random math method gives both floats and integers.
// To combat this, we combine it with the floor method to round the number town to nearest whole number.
// This leaves us with 5 real options (0, 1, 2, 3, 4) ---> Which correspond to the fortunes Array in the context of indices.

// The code defines the random Number generator (randomNum) as the floor method, and within the floor method is...
// the random method which works on the length of the fortunes array (5 options, index 0 to 4.)

// We will use the random index to pick a fortune from the fortune array.
// Bracket notation will be used to select an index.

const randomFortune = fortunes[randomNum];
// This line of code takes the random Number generated and retrieves the fortune stored in that position.

console.log(randomFortune);


// Functional method
function selectFortune(){
    const fortunes = [
        "Lol",
        "Yeah",
    ]

    const chooseFortune = Math.floor(Math.random() * fortunes.length);
    const resultFortune = fortunes[chooseFortune];

    console.log(resultFortune)
}

selectFortune()


let str = "coding";
let reversed = str.split("").reverse().join("");
console.log(reversed);


let word = "hello";
let chars = word.split("");
chars.reverse();
console.log(chars.join("-"));


function multiplesOf3Or5(number) {
  if (number % 3 === 0 || number % 5 === 0){
    return number/3 && number/4;
  }
  console.log(multiplesOf3Or5)
}

multiplesOf3Or5(10);