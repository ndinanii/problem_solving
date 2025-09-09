/*

In the casino game Blackjack,a player can determine whether 
they have an advantage on the next hand over the house by 
keeping track of the relative number of high and low cards 
remaining in the deck. This is called Card Counting.
Having more high cards remaining in the deck favors the player. 
When the count is positive, the player should bet high. 
When the count is zero or negative, the player should bet low.


*/
    

/* 

1. BLACKJACK BASICS

Blackjack is played with one or more decks of cards (52 cards per deck).
The house (casino) usually has a small statistical edge.
Certain cards favor the player more than the dealer, especially high cards (10, J, Q, K, A).


2. Why high cards favor the player?

Blackjack (Ace + 10 - value card) pays 3:2 → big payout for player.
Dealer must follow strict rules (e.g., hit until at least 17).
If the deck has more high cards, the dealer is more likely to bust.
So: High cards (10, J, Q, K, A) → good for player
Low cards (2–6) → good for dealer
Middle cards (7–9) → neutral


3. The counting system

Card counters assign values to cards:
+1 → 2, 3, 4, 5, 6 (low cards, help dealer).
0 → 7, 8, 9 (neutral).
-1 → 10, J, Q, K, A (high cards, help player).
As cards are dealt, you add or subtract from your running count.
Example:
Cards dealt: 5, K, 9
Count starts at 0
5 → +1
K → -1
9 → 0
New count = 0.


4. What the count means

Positive count → More high cards left → Player advantage → Bet high
Zero or negative count → No advantage or dealer edge → Bet low


5. Writing it in JavaScript

We’ll write a function that:
Takes a card as input.
Updates a global count.
Returns the count with a betting suggestion.
let count = 0;

*/

let count = 0;

function cc(card) {
    if (card >=2 && card <=6){
        count = count + 1;
    }

    if (card >= 7 && card <= 9){
        count = count + 0;
        return count + " Hold";
    }
    if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
        count = count - 1;
        return count + " Hold";
    }

    if (count > 0){
        return count + " Bet";
    }
    else return count + " Hold";
}

console.log(cc(10))