// Callback functions are functions that are passed as arguments to other functions.

function add(number1, number2, callback) {
 let result = number1 + number2;
 callback(result);
}

function logResult(result) {
    console.log(`The result is: ${result}`);
}
add(2, 3, logResult);
// The result is: 5



const arr = [-1, -2, -3, -4, -5];

function makePositive(num) {
    return num * -1;
}
const positiveArray = arr.map(makePositive);
console.log(positiveArray);
console.log("This code is synchronous, so the console.log will execute after the map function has completed.");
//Output: [-1, -2, -3, -4, -5]
