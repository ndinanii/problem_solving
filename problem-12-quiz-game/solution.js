/**
 * Quiz Game
 * 
 * A simple quiz game that stores questions with multiple choices,
 * randomly selects a question, has the computer randomly pick an answer,
 * and checks if the answer is correct.
 */

// Quiz questions database
// Each object has: category, question, choices array, and correct answer
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

/**
 * Selects a random question from the questions array
 */
function getRandomQuestion(questions) {
    const questionRandomizer = Math.floor(Math.random() * questions.length);
    return questions[questionRandomizer];
}

/**
 * Selects a random choice from the given choices array
 */
function getRandomComputerChoice(choices) {
    const choiceRandomizer = Math.floor(Math.random() * choices.length);
    return choices[choiceRandomizer];
}

/**
 * Checks if the computer's choice matches the correct answer
 */
function getResults(question, computerChoice) {
    if (computerChoice === question.answer) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
    }
}

// Game execution
// 1. Pick a random question
const questionObject = getRandomQuestion(questions);

// 2. Computer picks a random choice from that question
const computerChoice = getRandomComputerChoice(questionObject.choices);

// 3. Check if the choice is correct
const result = getResults(questionObject, computerChoice);

// 4. Display the results
console.log("Category:", questionObject.category);
console.log("Question:", questionObject.question);
console.log("Choices:", questionObject.choices);
console.log("Computer's Choice:", computerChoice);
console.log(result);
