//works for both tag and class names

/*
function displayItem() {
    const el = document.querySelectorAll("h3");
    const p = document.querySelector("p");
    p.innerText = el[2].innerHTML;
}
    


function displayItem() {
    const el = document.querySelectorAll(".urgent");
    const p = document.querySelector("p");
    p.innerText = el.length;
}



// can also use to look for specific elements, combining tag and class names

function displayItems() {
    const el = document.querySelectorAll("h3.news");
    const p = document.querySelector("p");
    p.innerText = el.length;
}




// can do more advanced searches, like accessing elements of two diffirent classes at the same time.

function displayItems() {
    const el = document.querySelectorAll(".movie, .tech");
    const p = document.querySelector("p");
    p.innerText = el.length;
}



// can also combine selectors like classes, tags, or IDs
function displayItems() {
    const el = document.querySelectorAll(".movie, .tech, button");
    const p = document.querySelector("p");
    p.innerText = el[2].innerHTML;
}



// to retrieve the elements that have both the class
function displayItems() {
    const el = document.querySelectorAll(".sports.news");
    const p = document.querySelector("p");
    p.innerText = el[0].innerHTML;
}


// to retrieve the number of elements that have either the class
function displayItems() {
    const el = document.querySelectorAll(".sports, .tech");
    const p = document.querySelector("p");
    p.innerText = el.length;
}

*/

function displayItems() {
    const el = document.querySelectorAll(".movie, .sports, img");
    const p = document.querySelector("p");
    p.innerText = el[2].src;
}