/*querySelector works with all selectors, like tags, classes, and ID's.
ID - #, Class - ., Tag - nothing
only retrives the first element it finds

function publish() {
    const el = document.querySelector("#prompt");
    el.innerHTML = "Website published!";
}


function publish() {
    const el = document.querySelector(".prompt");
    el.innerHTML = "Website published!";
}
*/

function publish() {
    const el = document.querySelector("h3");
    el.innerHTML = "Website published!";
}
