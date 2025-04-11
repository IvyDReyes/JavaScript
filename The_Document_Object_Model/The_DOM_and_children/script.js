/*
let html root = document.body;

let listChildren = document.querySelector("ol").children;
let paragraph = document.querySelector("p");
paragraph.innerHTML = `Number of list items: ${listChildren.length}`;

let heading = document.body.firstElementChild;
heading.innerHTML = "Week 13";
*/



let heading = document.querySelector("h1");
let siblingElement = heading.nextElementSibling;
siblingElement.innerHTML = "List deleted";

