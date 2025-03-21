//getElementsByTagName() method can get a collection of elements of the same tag type.
/*
function displayItem() {
    const el = document.getElementsByTagName("li");
    const div = document.querySelector("div").innerHTML = el.length;
}

*/


//Collections are similar to arrays, they work with indices that start from 0
function displayItem() {
    const el = document.getElementsByTagName("li");
    const p = document.querySelector("p");
    p.innerText = el[0].innerHTML;
}