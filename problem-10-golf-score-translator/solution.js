/**
 * Golf Score Translator
 * 
 * In golf, each hole has a "par" (expected number of strokes).
 * This function translates the actual number of strokes into golf terminology.
 * 
 * Terminology:
 * - Hole-in-one: 1 stroke (regardless of par)
 * - Eagle: 2 strokes under par
 * - Birdie: 1 stroke under par
 * - Par: Exact par
 * - Bogey: 1 stroke over par
 * - Double Bogey: 2 strokes over par
 * - Go Home!: 3 or more strokes over par
 */

const names = [
    "Hole-in-one!",    // Index 0
    "Eagle",            // Index 1
    "Birdie",           // Index 2
    "Par",              // Index 3
    "Bogey",            // Index 4
    "Double Bogey",     // Index 5
    "Go Home!"          // Index 6
];

function golfScore(par, strokes) {
    // Special case: hole-in-one (always 1 stroke)
    if (strokes === 1) {
        return names[0];
    }
    
    // 2 or more strokes under par
    if (strokes <= (par - 2)) {
        return names[1];
    }
    
    // 1 stroke under par
    if (strokes === (par - 1)) {
        return names[2];
    }
    
    // Exactly par
    if (strokes === par) {
        return names[3];
    }
    
    // 1 stroke over par
    if (strokes === (par + 1)) {
        return names[4];
    }
    
    // 2 strokes over par
    if (strokes === (par + 2)) {
        return names[5];
    }
    
    // 3 or more strokes over par
    if (strokes >= (par + 3)) {
        return names[6];
    }
}

// Test cases
console.log(golfScore(4, 1));   // "Hole-in-one!"
console.log(golfScore(4, 2));   // "Eagle"
console.log(golfScore(5, 4));   // "Birdie"
console.log(golfScore(4, 4));   // "Par"
console.log(golfScore(4, 5));   // "Bogey"
console.log(golfScore(4, 6));   // "Double Bogey"
console.log(golfScore(4, 7));   // "Go Home!"
