// setInterval(function, delay, arg1, arg2, ...);
// clearInterval(intervalId);

let countdown = 3;
const countdownInterval = setInterval(() => {
    if (countdown > 0) {
        console.log(countdown);
    }
    countdown--;
    if (countdown < 0) {
        clearInterval(countdownInterval);
        console.log("GO");
    }
}, 1000);