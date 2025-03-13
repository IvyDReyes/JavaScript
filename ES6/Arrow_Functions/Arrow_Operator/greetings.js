//Arrow functions are a type of anonymous function, meaning that they don't have a name.
function getGreeting() {
    return 'Greeting';
}
const greeting = () => {
    return 'Hi';
};
console.log(getGreeting());
console.log(greeting());


// Adding parameters
function getGreeting1(firstName) {
    return 'Greetings ' + firstName;
}
const greeting1 = (firstName) => {
    return 'Greetings ' + firstName;
}
console.log(greeting1('Tony'));


//Adding the arrow operator =>
const hello = function myFunction() {
    return 'Greetings!';
};
const helloArrowFunction = () => {
    return 'Greeting ';
};
console.log(hello());
console.log(helloArrowFunction());

//If an arrow function only has one statement, we can leave out both the curly braces and the return keyword to get some very short code.
const greeting2 = () => 'Greetings!!'
console.log(greeting2());

const getVehicleCount = () => {
    const count = 4003;
    return count;
}
console.log(getVehicleCount());

const getVehicleCount1 = () => 400;
console.log(getVehicleCount1());
