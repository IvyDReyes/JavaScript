//To pass a value to a function, we add a variable called a parameter, a special variable that stores a value.

function displayHalf (number) {
    const half = number / 2;
    console.log(half);
}
displayHalf(10);

function greet(name) {
    console.log("Hello, " + name);
}
greet("Johanna");