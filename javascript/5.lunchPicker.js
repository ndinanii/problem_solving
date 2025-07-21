let lunches = [];
let str;


function addLunchToEnd(lunches, str) {
  lunches.push(str)
    console.log(`${str} added to the end of the lunch menu.`);
    return lunches;
};

function addLunchToStart(lunches, str) {
  lunches.unshift(str)
    console.log(`${str} added to the start of the lunch menu.`);
    return lunches;
};

function removeLastLunch(lunches) {
  if (lunches.length === 0){
    console.log('No lunches to remove.');
    return lunches;
  }

  const removedLunch = lunches.pop();
  console.log(`${removedLunch} removed from the end of the lunch menu.`);
  return lunches;
    
};

function removeFirstLunch(lunches) {
  if (lunches.length === 0){
    console.log("No lunches to remove.");
    return lunches;
  }

  const removedLunch = lunches.shift();
    console.log(`${removedLunch} removed from the start of the lunch menu.`);
    return lunches;
  
};

function getRandomLunch(lunches) {
  // 1. Check if the array is empty FIRST.
  if (lunches.length === 0) {
    console.log("No lunches available.");
    return; // Exit the function.
  }

  // 2. If not empty, proceed to find a random element.
  const randomElement = lunches[Math.floor(Math.random() * lunches.length)];
  console.log(`Randomly selected lunch: ${randomElement}`);
}

function showLunchMenu(lunches){
  if (lunches.length === 0){
    console.log("The menu is empty.")
    return;
  }
  
 console.log(`Menu items: ${lunches.join(', ')}`);

};