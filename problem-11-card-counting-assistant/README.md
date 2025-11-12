# Problem 11: Card Counting Assistant

## Problem Description

Implement a card counting system for Blackjack using the Hi-Lo strategy. This system helps players track the ratio of high to low cards remaining in the deck to determine betting strategy.

## Requirements

- Function should accept a card value (number 2-10, or "J", "Q", "K", "A")
- Maintain a running count across multiple function calls
- Return the current count with betting advice ("Bet" or "Hold")
- Implement the Hi-Lo counting system

## Blackjack Card Counting Basics

### Why Count Cards?
- **High cards** (10, J, Q, K, A) favor the player:
  - More likely to get Blackjack (3:2 payout)
  - Dealer more likely to bust when forced to hit
- **Low cards** (2-6) favor the dealer:
  - Dealer benefits from these when forced to hit on 12-16
  - Player gets worse hands

### The Hi-Lo System

| Card Values | Count Adjustment | Why? |
|-------------|------------------|------|
| 2, 3, 4, 5, 6 | +1 | Low cards (favor dealer) leaving deck |
| 7, 8, 9 | 0 | Neutral cards |
| 10, J, Q, K, A | -1 | High cards (favor player) leaving deck |

### Betting Strategy
- **Positive count** → More high cards remain → Player advantage → Bet high
- **Zero or negative** → No advantage or dealer advantage → Bet low (Hold)

## Approach

1. Maintain a global `count` variable that persists across function calls
2. For each card seen, adjust the count according to Hi-Lo rules
3. Return the current count with appropriate betting advice

## Solution Logic

The function uses a global variable `count` to maintain state across multiple calls, simulating a continuous game:

```javascript
let count = 0;  // Persists between function calls
```

**Conditional Logic:**
1. Check if card is low (2-6) → increment count
2. Check if card is high (10 or face card) → decrement count
3. Neutral cards (7-9) → no change needed

**Betting Decision:**
- `count > 0`: Return "Bet" (player has advantage)
- `count <= 0`: Return "Hold" (no advantage)

**Time Complexity:** O(1) - constant time per card  
**Space Complexity:** O(1) - single count variable

## Example Usage

```javascript
cc(2);   // Returns: "1 Bet"
cc(3);   // Returns: "2 Bet"
cc("K"); // Returns: "1 Bet"
cc("A"); // Returns: "0 Hold"
cc(10);  // Returns: "-1 Hold"
```

## Real-World Application

Card counting is **legal** but casinos may ask counters to leave. Modern casinos use multiple decks and shuffle frequently to reduce effectiveness. This implementation demonstrates the mathematical principle behind the strategy.

## Note

This is for **educational purposes only**. Card counting requires significant practice and doesn't guarantee wins - it only slightly shifts the odds in the player's favor over many hands.
