/**
 * Lunch Picker
 * 
 * A collection of functions to manage a lunch menu array.
 * Provides functionality to add, remove, display, and randomly select lunch options.
 */

let lunches = [];

/**
 * Add a lunch item to the end of the menu
 */
function addLunchToEnd(lunches, str) {
    lunches.push(str);
    console.log(`${str} added to the end of the lunch menu.`);
    return lunches;
}

/**
 * Add a lunch item to the start of the menu
 */
function addLunchToStart(lunches, str) {
    lunches.unshift(str);
    console.log(`${str} added to the start of the lunch menu.`);
    return lunches;
}

/**
 * Remove the last lunch item from the menu
 */
function removeLastLunch(lunches) {
    if (lunches.length === 0) {
        console.log('No lunches to remove.');
        return lunches;
    }
    
    const removedLunch = lunches.pop();
    console.log(`${removedLunch} removed from the end of the lunch menu.`);
    return lunches;
}

/**
 * Remove the first lunch item from the menu
 */
function removeFirstLunch(lunches) {
    if (lunches.length === 0) {
        console.log("No lunches to remove.");
        return lunches;
    }
    
    const removedLunch = lunches.shift();
    console.log(`${removedLunch} removed from the start of the lunch menu.`);
    return lunches;
}

/**
 * Select and display a random lunch from the menu
 */
function getRandomLunch(lunches) {
    // Check if the array is empty first
    if (lunches.length === 0) {
        console.log("No lunches available.");
        return;
    }
    
    // Get a random element from the array
    const randomElement = lunches[Math.floor(Math.random() * lunches.length)];
    console.log(`Randomly selected lunch: ${randomElement}`);
}

/**
 * Display all items in the lunch menu
 */
function showLunchMenu(lunches) {
    if (lunches.length === 0) {
        console.log("The menu is empty.");
        return;
    }
    
    console.log(`Menu items: ${lunches.join(', ')}`);
}

// Example usage
addLunchToEnd(lunches, "Pizza");
addLunchToEnd(lunches, "Burger");
addLunchToStart(lunches, "Salad");
showLunchMenu(lunches);        // Menu items: Salad, Pizza, Burger
getRandomLunch(lunches);        // Randomly selected lunch: Pizza (varies)
removeFirstLunch(lunches);      // Salad removed from the start
showLunchMenu(lunches);        // Menu items: Pizza, Burger
