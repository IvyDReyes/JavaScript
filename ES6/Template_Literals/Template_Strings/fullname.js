const fullName = "Helen McGuire";
console.log("Hello " + fullName + "!");
console.log(`Hello ${fullName}!`);

//enclose the string with back tick characters `` rather than double quotes ""
const cake = `Apple`;
console.log(cake);

//combine variables with string literals using ${name} name is a variable
const category = `pie`;
const cake1 = `Apple ${category}`;
console.log(cake1);

//can also perform operations inside a string literal by adding expressions inside the braces of ${}
const quantity = 20;
const price = 10;
const cost = `Total cost : ${quantity * price}`;
console.log(cost);


const greetings = (name) => {
    return `Bonjour ${name}`;
}
console.log(greetings`Jane`); //When calling a function, we leave out the parenthesis () if we're passing a string literal as an argument to the function.

const likeBy = person => {
    return `Movie liked by: ${person}`;
};
console.log(likeBy`Helen`);