# Problem 08: Lunch Picker

## Problem Description

Create a lunch menu management system with functions to add, remove, display, and randomly select lunch items from an array.

## Requirements

The system should provide the following functions:

1. **addLunchToEnd**: Add an item to the end of the menu
2. **addLunchToStart**: Add an item to the beginning of the menu
3. **removeLastLunch**: Remove the last item from the menu
4. **removeFirstLunch**: Remove the first item from the menu
5. **getRandomLunch**: Select and display a random item
6. **showLunchMenu**: Display all menu items

All functions should handle edge cases (empty arrays) and provide user-friendly console messages.

## Approach

### Array Manipulation Methods
- `push()`: Adds element to end of array
- `unshift()`: Adds element to beginning of array
- `pop()`: Removes and returns last element
- `shift()`: Removes and returns first element
- `join()`: Converts array to comma-separated string

### Random Selection
Use `Math.random()` multiplied by array length, then floor the result to get a valid random index.

## Solution Logic

### Adding Items
- **To End**: Use `push()` which modifies the array in place
- **To Start**: Use `unshift()` which shifts all elements right

### Removing Items
- **From End**: Use `pop()` which returns the removed element
- **From Start**: Use `shift()` which returns the removed element
- Both check if array is empty before attempting removal

### Random Selection
Formula: `Math.floor(Math.random() * lunches.length)`
- Generates index from 0 to length-1
- Checks for empty array first to avoid errors

### Display Menu
Uses `join(', ')` to create a readable comma-separated list of all items.

**Time Complexity:** 
- Add/Remove from end: O(1)
- Add/Remove from start: O(n) - requires shifting elements
- Random selection: O(1)
- Display: O(n)

**Space Complexity:** O(1) - operations modify array in place

## Example Usage

```javascript
let lunches = [];
addLunchToEnd(lunches, "Pizza");      // Pizza added to the end
addLunchToStart(lunches, "Salad");    // Salad added to the start
showLunchMenu(lunches);               // Menu items: Salad, Pizza
getRandomLunch(lunches);              // Randomly selected lunch: Salad
removeFirstLunch(lunches);            // Salad removed from the start
```
