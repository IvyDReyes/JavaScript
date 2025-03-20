//getElementsByTagName() method can get a collection of elements of the same tag type.
function displayItem() {
    const el = document.getElementsByTagName("li");
    const div = document.querySelector("div").innerHTML = el.length;
}