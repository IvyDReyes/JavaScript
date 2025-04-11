const prompt = document.querySelector("#prompt");
const el = document.querySelector("button");

function publish() { //event handler
    prompt.innerHTML = "Website is published!";
}
el.onclick = publish; //calling the function without parentheses