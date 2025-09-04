/* 

In the game of Golf, each hole has a par, 
meaning the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. 
Depending on how far above or below par your strokes are, there is a different nickname.

For example, if you complete the hole in one stroke under par, it's called a "birdie." 
If you're two strokes under par, it's an "eagle." 
Conversely, if you take one stroke over par, it's a "bogey," and two strokes over is a "double bogey."

*/
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", 
    "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes){
    if (strokes === 1){
        return names[0];
    }
    if(strokes <= (par - 2)){
        return names[1];
    }
    if (strokes === (par - 1)){
        return names[2];
    }
    if (strokes === par){
        return names[3];
    }
    if (strokes === (par + 1)){
        return names[4];
    }
    if (strokes === (par + 2)){
        return names[5];
    }
    else if (strokes >= (par + 3)){
        return names[6];
    }
}
console.log(golfScore(4,7))