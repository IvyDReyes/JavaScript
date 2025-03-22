//to access user input from an input element, add .value at the end of document.getElementById("elementID")
function register() {
const paragraph = document.querySelector("p");
const username = document.getElementById("usernameInput").value;
paragraph.innerHTML = username;
}

//works the same way with textareas
function addReview() {
    const review = document.getElementById("reviewText").value;
    const paragraph = document.getElementById("addedReview");
    paragraph.innerHTML = review;
}
