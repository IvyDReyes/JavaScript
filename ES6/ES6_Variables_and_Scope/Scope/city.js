//The space outside a function is called global scope.
let cityToVisit = "Salzburg";

function travel() {
    console.log("Let's go to " + cityToVisit);
}
travel(cityToVisit);

//Block scope is the part of code in between the braces ({}) that belong to loops or conditions.
if (10 === 10) {
    console.log("The space here is block scope");
}