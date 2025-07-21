// Define 10 fortunes and randomly select one of them to display the fortune to the user.
// Inputs
let fortune1 = "A gentle stream will carry you to places unknown, where the waters of wisdom await your arrival.";
let fortune2 = "Tonight, the moon will speak secrets to your heart, listen closely to the whispers of your soul.";
let fortune3 = "In the shade of your ancestors, a new branch will sprout, bearing the fruit of your highest potential.";
let fortune4 = "In the stillness of the desert night, you will find peace, and the stars will guide you through life's vast expanse.";
let fortune5 = "The wind whispers ancient truths to the trees, listen to its gentle voice and you will find the secrets of the ages.";
let fortune6 = "The river flows, yet its source remains hidden, like the mysteries of your own heart, it will reveal itself in time.";
let fortune7 = "Like the mountain's unyielding peak, you will rise above life's challenges, unshakeable and strong.";
let fortune8 = "The ocean's depths hold secrets and treasures beyond your wildest dreams, dive in and discover the riches of your own potential."
let fortune9 = "In the eye of the storm, you will find a stillness, a peace that surpasses understanding, and guides you through turbulent times."
let fortune10 = "The forest is a mirror to your soul, look within and you will see the beauty and wonder of your own inner world."

const randomNumber = Math.floor(Math.random() * (10) + 1);
let whatTheUserSees;


if (randomNumber === 1){
    whatTheUserSees = fortune1;
};
if (randomNumber === 2){
    whatTheUserSees = fortune2;
}
if (randomNumber === 3){
    whatTheUserSees = fortune3;
}
if (randomNumber === 4){
    whatTheUserSees = fortune4;
}
if (randomNumber === 5){
    whatTheUserSees = fortune5;
}
if (randomNumber === 6){
    whatTheUserSees = fortune6;
}
if (randomNumber === 7){
    whatTheUserSees = fortune7;
}
if (randomNumber === 8){
    whatTheUserSees = fortune8;
}
if (randomNumber === 9){
    whatTheUserSees = fortune9;
}
if (randomNumber === 10){
    whatTheUserSees = fortune10;
}

console.log(randomNumber + " - " + whatTheUserSees);

let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3, 3));