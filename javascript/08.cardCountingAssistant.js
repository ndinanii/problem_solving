/*

In the casino game Blackjack,a player can determine whether 
they have an advantage on the next hand over the house by 
keeping track of the relative number of high and low cards 
remaining in the deck. This is called Card Counting.
Having more high cards remaining in the deck favors the player. 
When the count is positive, the player should bet high. 
When the count is zero or negative, the player should bet low.


*/

let count = 0;

function cc(card){
    // For values between 2 to 10, the card parameter will be a number.
    // For all other values, the card parameter will be a string.
    if (count > 0) return count + '' + "Bet";
    if (count <= 0) return count + '' + "Hold";

    if (card === 7 || 8 || 9){
        return count;
    }

    else if (card === 2 || 3 || 4 || 5 || 6 ){
        return count + 1;
    }
    
    else if (card === 10 || "J" || "Q" || "K" || "K"){
        return count - 1;
    }

}

console.log()