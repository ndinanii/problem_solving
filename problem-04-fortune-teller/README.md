# Problem 04: Fortune Teller

## Problem Description

Build a Fortune Teller application that defines five fortunes and randomly selects one to display to the user. This is a simple exercise to practice using variables, random number generation, and conditional statements.

## Requirements

- Initialize five variables (`fortune1` through `fortune5`) with string values
- Select a random number between 1 and 5 (inclusive)
- Create a `selectedFortune` variable
- Assign the appropriate fortune based on these rules:
  - If `randomNumber` is 1, assign `fortune1`
  - If `randomNumber` is 2, assign `fortune2`
  - If `randomNumber` is 3, assign `fortune3`
  - If `randomNumber` is 4, assign `fortune4`
  - If `randomNumber` is 5, assign `fortune5`
- Log the selected fortune to the console

## Approach

1. **Define fortunes**: Create five constant variables with fortune messages
2. **Generate random number**: Use `Math.random()` and `Math.floor()` to get a random integer
3. **Select fortune**: Use conditional statements to match the number to a fortune
4. **Display result**: Output the selected fortune

## Solution Logic

### Random Number Generation
The formula `Math.floor(Math.random() * 5) + 1` works as follows:
- `Math.random()` generates a decimal between 0 (inclusive) and 1 (exclusive)
- Multiplying by 5 gives us a range of 0 to 4.999...
- `Math.floor()` rounds down to get integers 0-4
- Adding 1 shifts the range to 1-5

### Conditional Assignment
Multiple `if` statements check the random number and assign the corresponding fortune. This could be optimized with `else if` or a switch statement, but the current approach is clear and functional.

**Time Complexity:** O(1) - constant time  
**Space Complexity:** O(1) - fixed number of variables

## Example Output

```
Your cat will look very cuddly today.
```
(Output will vary randomly on each run)
