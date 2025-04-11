const item = document.querySelector("div");

function changeColor() {
    item.classList.toggle("pink");
    item.removeEventListener("click", changeColor);
}
item.addEventListener("click", changeColor);