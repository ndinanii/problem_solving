# Problem 10: Golf Score Translator

## Problem Description

In golf, each hole has a "par" - the expected number of strokes a skilled golfer should take. This function translates the actual number of strokes into golf terminology based on how they compare to par.

## Requirements

- Function should accept two parameters: par (expected strokes) and strokes (actual strokes)
- Return the appropriate golf term based on the score
- Handle all standard golf scoring terms

## Golf Scoring Terms

| Term | Strokes Relative to Par | Example (Par 4) |
|------|------------------------|-----------------|
| **Hole-in-one** | 1 stroke (special case) | 1 stroke |
| **Eagle** | 2+ under par | ≤2 strokes |
| **Birdie** | 1 under par | 3 strokes |
| **Par** | Exact par | 4 strokes |
| **Bogey** | 1 over par | 5 strokes |
| **Double Bogey** | 2 over par | 6 strokes |
| **Go Home!** | 3+ over par | ≥7 strokes |

## Approach

1. Check for the special case (hole-in-one) first
2. Calculate the difference between strokes and par
3. Use conditional statements to match the difference to a term
4. Return the appropriate term from a predefined array

## Solution Logic

The function uses a series of conditional checks in order of priority:

1. **Hole-in-one check first**: This overrides all other conditions
2. **Under par checks**: Eagle (≤ par-2), then Birdie (= par-1)
3. **At par check**: Exactly equal to par
4. **Over par checks**: Bogey (= par+1), Double Bogey (= par+2), Go Home (≥ par+3)

**Why this order matters**: 
- Hole-in-one must be checked first because it's independent of par
- The remaining checks follow a logical progression from best to worst score

The terms are stored in an array for easy reference and modification.

**Time Complexity:** O(1) - constant number of comparisons  
**Space Complexity:** O(1) - fixed array size

## Example Usage

```javascript
golfScore(4, 1);   // Returns: "Hole-in-one!"
golfScore(5, 3);   // Returns: "Eagle" (2 under par)
golfScore(4, 3);   // Returns: "Birdie" (1 under par)
golfScore(4, 4);   // Returns: "Par"
golfScore(4, 5);   // Returns: "Bogey" (1 over par)
golfScore(4, 7);   // Returns: "Go Home!" (3 over par)
```

## Fun Fact

The term "birdie" originated in the early 1900s in the United States. "Bird" was slang for anything excellent, and the term stuck in golf terminology!
