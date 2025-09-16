// Each object has four keys:
// category → The subject area of the question (string)
// question → The actual quiz question (string).
// choices → An array of possible answers (multiple strings).
// answer → The correct answer (must be one of the choices).
// This structure keeps all the info for each question bundled together, making it easy to retrieve.

const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for gold?",
    choices: ["Ag", "Au", "Gd", "Go"],
    answer: "Au"
  },
  {
    category: "Geography",
    question: "Which is the largest desert in the world?",
    choices: ["Sahara", "Gobi", "Antarctic Desert", "Kalahari"],
    answer: "Antarctic Desert"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
    answer: "George Washington"
  },
  {
    category: "Sports",
    question: "How many players are there in a standard soccer team on the field?",
    choices: ["9", "10", "11", "12"],
    answer: "11"
  },
  {
    category: "Technology",
    question: "What does 'HTTP' stand for?",
    choices: [
      "HyperText Transfer Protocol",
      "HighText Transfer Protocol",
      "Hyperlink Transfer Protocol",
      "HyperText Transmission Program"
    ],
    answer: "HyperText Transfer Protocol"
  }
];

// Function to select a random question
function getRandomQuestion(questions){
    // How to randomize selection
    const questionRandomizer = Math.floor(Math.random() * questions.length);
    
    // Give back a randomly selected question
    return questions[questionRandomizer];

}

// Function to select a random choice
function getRandomComputerChoice (choices){

    // How to randomize selection
    const choiceRandomizer = Math.floor(Math.random() * choices.length);

    // Give back a randomly selected array of choices
    return choices[choiceRandomizer];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}


// Pick a random question
const questionObject = getRandomQuestion(questions);

// Computer picks a random choice from that question
const computerChoice = getRandomComputerChoice(questionObject.choices);

// Get result
const result = getResults(questionObject, computerChoice);

// Show it
console.log("Category:", questionObject.category);
console.log("Question:", questionObject.question);
console.log("Choices:", questionObject.choices);
console.log("Computer's Choice:", computerChoice);
console.log(result);

