//The else statement doesn't need it's own condition. That's because it handles the cases where the if condition is false.
let number = 99;
if (number === 1) {
    console.log("It's 1");
} else {
    console.log("It's not 1");
}

let rating = 87;
if (rating >= 90) {
    console.log("Buy movie tickets");
} else {
    console.log("Homeflix & skip the bill");
}

let points = 7600;
let pointsNeeded = 8000;
if (points >= pointsNeeded) {
    console.log("You're level 2!");
} else {
    const left = pointsNeeded - points;
    console.log("You need " + left + " points to get to Level 2");
}