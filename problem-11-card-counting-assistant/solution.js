/**
 * Card Counting Assistant (Blackjack)
 * 
 * In Blackjack, card counting helps players determine when they have an advantage.
 * This function implements the Hi-Lo counting system:
 * - Low cards (2-6): +1 to count (good for dealer, bad for player)
 * - Neutral cards (7-9): 0 to count
 * - High cards (10, J, Q, K, A): -1 to count (good for player)
 * 
 * When count is positive → Player advantage → Bet high
 * When count is zero or negative → Dealer advantage → Bet low (Hold)
 */

let count = 0;

function cc(card) {
    // Low cards (2-6): favorable to dealer, increment count
    if (card >= 2 && card <= 6) {
        count++;
    } 
    // High cards (10, J, Q, K, A): favorable to player, decrement count
    else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
        count--;
    }
    // Neutral cards (7-9): no change to count
    
    // Return the count with betting advice
    if (count > 0) {
        return count + " Bet";    // Positive count = player advantage
    } else {
        return count + " Hold";   // Zero or negative = no advantage
    }
}

// Test sequence
console.log(cc(2));    // 1 Bet
console.log(cc(3));    // 2 Bet
console.log(cc(7));    // 2 Bet (neutral card, count unchanged)
console.log(cc("K"));  // 1 Bet
console.log(cc("A"));  // 0 Hold
console.log(cc(10));   // -1 Hold
