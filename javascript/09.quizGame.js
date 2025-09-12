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



function getRandomQuestion(arrOfQuestions){

    // Where are the questions?
    const arrOfQuestions = [questions[0].question, questions[1].question, 
    questions[2].question, questions[3].question, questions[0].question];

    // Get the object's property names (keys) as an array
    const propertyNames = Object.keys(arrOfQuestions)

    // Method to randomize within the range of the propertyNames array's length
    const questionRandomizer = Math.floor(Math.random() * arrOfQuestions.length);

    // Random Question to return 
    const randomPropertyName = arrOfQuestions[questionRandomizer];

    return randomPropertyName;
    
}

function getRandomComputerChoice(choices){
  
}