// getElementsByClassName() returns a collection that contains specific elements of a class

/*
function displayItem() {
    const el = document.getElementsByClassName("urgent");
    const p = document.querySelector("p");
    p.innerText = "You have " + el.length + " urgent tasks";
}


function displayItem() {
    const el = document.getElementsByClassName("urgent important");
    const p = document.querySelector("p");
    p.innerText = el.length;
}

*/
//Also retuns a collection that can access element through index

function displayItem() {
    const el = document.getElementsByClassName("urgent");
    const p = document.querySelector("p");
    p.innerText = el[0].innerHTML;
}


