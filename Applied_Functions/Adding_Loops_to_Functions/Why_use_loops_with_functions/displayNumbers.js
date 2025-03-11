//If we have to repeat the same instructions more than once, we can add a loop inside a function.
function displayNumbers() {
    for (let i = 1; i <= 3; i++) {
        console.log("And a " + i);
    }
}
displayNumbers();
displayNumbers();

function displayNumber1(message) {
    for (let i = 1; i <= 10; i++) {
        console.log(i + message);
    }
}
displayNumber1(" ginger beers on the wall");
displayNumber1(" root beers on the wall");

function displayNumbers2(addition) {
    for (let i = 0; i < 3; i++) {
        console.log(i + addition);
    }
}
displayNumbers2(100);
