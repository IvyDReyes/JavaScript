let intervalId;
let direction = "left";

function startInterval() {
    intervalId = setInterval(() => {
        if (direction === "left") {
            direction = "right";
        } else {
            direction = "left";
        }
        console.log(direction);
    }, 500);
}

function stopInterval() {
    clearInterval(intervalId);
    console.log("Interval stopped");
}

startInterval();
setTimeout(stopInterval, 2000);
