//touchstart, touchmove, touchend, touchcancel

function displayMessage() {
    document.getElementById("message").innerHTML = "Meow!";
}

document.getElementById("cat").addEventListener("touchstart", displayMessage);