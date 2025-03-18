//When .map() is called on an array it allows to modify each value and store it in a new array
const values = [56, 27, 19, 20, 38];
const evenOrOdd = values.map(function(elementz){
    return (elementz % 2) == 0;
});
console.log(evenOrOdd);


const queue = ["Sarah", "Hank", "Anna", "Beatrice"];
const displayQueue = queue.map(function(elements, index){
    return index + ": " + elements;
});
console.log(displayQueue);

const states = ['ak', 'md', 'va', 'ca', 'or'];
const upperCaseStates = states.map((elements1) => elements1.toUpperCase());
console.log(upperCaseStates);

//Strings
const names = ['lisa', 'jm', 'hannah', 'frank'];
const nameLength = names.map((elements2) => elements2.length);
console.log(nameLength);


const valuess = [1, 3, 4, 7];
const squares = valuess.map(element3 => element3*element3);
console.log(squares);

const colors = ["blue", "red", "green"];
const length = colors.map(element4 => element4.length);
console.log(length);


const flavors = ["chocolate", "vanilla", "strawberry"];
const length1 = flavors.map(function(element5, index) {
    console.log(element5, index);
} );
    
