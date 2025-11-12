# Problem 12: Quiz Game

## Problem Description

Create a quiz game that stores multiple-choice questions, randomly selects one, has a computer make a random guess, and checks if the answer is correct.

## Requirements

- Store questions with:
  - Category (subject area)
  - Question text
  - Array of multiple choice options
  - Correct answer
- Randomly select a question
- Randomly select an answer from the choices
- Check if the selected answer is correct
- Display the question, choices, computer's selection, and result

## Approach

### 1. Data Structure
Use an array of objects where each question object contains:
```javascript
{
    category: "string",
    question: "string",
    choices: ["option1", "option2", ...],
    answer: "correct answer"
}
```

### 2. Random Selection Functions
- `getRandomQuestion()`: Picks a random question from the array
- `getRandomComputerChoice()`: Picks a random choice from the choices array

### 3. Validation Function
- `getResults()`: Compares the computer's choice to the correct answer

### 4. Game Flow
1. Select random question
2. Computer selects random answer
3. Validate answer
4. Display results

## Solution Logic

### Random Selection Formula
```javascript
Math.floor(Math.random() * array.length)
```
- `Math.random()`: Generates decimal 0 to 0.999...
- Multiply by `array.length`: Scales to 0 to (length - 0.001...)
- `Math.floor()`: Rounds down to get valid array index (0 to length-1)

### Data Organization
The questions array keeps all related information together. Each question is self-contained with its own choices and answer, making it easy to add/remove questions.

### Validation Logic
Simple string comparison checks if the computer's choice matches the `answer` property. Returns descriptive message either way.

**Time Complexity:** O(1) for random selection, O(1) for validation  
**Space Complexity:** O(n) where n is the number of questions stored

## Example Output

```
Category: Science
Question: What is the chemical symbol for gold?
Choices: [ 'Ag', 'Au', 'Gd', 'Go' ]
Computer's Choice: Au
The computer's choice is correct!
```

## Possible Extensions

1. **User Input**: Allow human players to answer instead of computer
2. **Score Tracking**: Keep track of correct/incorrect answers
3. **Multiple Rounds**: Loop through multiple questions
4. **Difficulty Levels**: Categorize questions by difficulty
5. **Timer**: Add time limits for answers
6. **Categories**: Let users choose category before question
7. **Leaderboard**: Store high scores with names

## Educational Value

This problem teaches:
- Object-oriented data structures
- Array manipulation
- Random number generation
- Function composition (breaking logic into smaller functions)
- Separation of concerns (data, logic, presentation)
