//Function names should be descriptive and should indicate the main purpose of the function.
function display(word) {
    console.log(word);
}
display("Hi");
display("Bye");

//Functions are actions, so their names should contain at least one verb. When using multiple words, the verb is a prefix.
function sumTotal(price, tax) {
    console.log(price + tax);
}
sumTotal(1000, 250);

//Functions that mainly return a value without changing it in any way start with verbs like get.
function getName(fullName) {
    return fullName[0];
}
const fullName = ["Don", "Juan"];
const firstName = getName(fullName);

//Functions that return boolean values often start with is
function isFreezing(temperature) {
    return temperature < 0;
}
const freezing = isFreezing(-3);
console.log(freezing);


function isEqual(number) {
    return number === 10;
}
const number = 10;
console.log(isEqual(number));