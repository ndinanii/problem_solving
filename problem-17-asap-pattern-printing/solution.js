/**
 * ASAP Pattern Printing
 * 
 * A pattern printing exercise from ASAP Frontend JavaScript tutorial.
 * Prints different messages based on divisibility rules for numbers 1-15.
 */

// Loop from 1 to 15
for (let i = 1; i <= 15; ++i) {
    // If divisible by 5, print "ASAP FRONT END"
    if (i % 5 === 0) {
        console.log("ASAP FRONT END");
    }
    // Else if divisible by 2 (even number), print "FrontEnd"
    else if (i % 2 === 0) {
        console.log("FrontEnd");
    }
    // Otherwise, print "ASAP"
    else {
        console.log("ASAP");
    }
}

/*
Expected Output:
1: ASAP
2: FrontEnd
3: ASAP
4: FrontEnd
5: ASAP FRONT END
6: FrontEnd
7: ASAP
8: FrontEnd
9: ASAP
10: ASAP FRONT END
11: ASAP
12: FrontEnd
13: ASAP
14: FrontEnd
15: ASAP FRONT END
*/
