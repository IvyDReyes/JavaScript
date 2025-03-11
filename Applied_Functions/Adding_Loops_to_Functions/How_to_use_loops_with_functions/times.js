//We can use parameters to mark the endpoint of a loop.
function drawVerticalLine (times) {
    for (let i = 0; i < times; i++) {
        console.log("|")
    }
}
drawVerticalLine(5);

//To control where a loop starts, we use a parameter to set the counter variable's value.
function displayDaysLeft(day) {
    for (let i = day; i < 31; i++) {
        console.log(i);
    }
}
displayDaysLeft(26);

//We can use parameters to set both the start and end values. This code only displays numbers in between the values we passed to the function.
function displayInterval(start, end) {
    for(let i = start; i < end; i++) {
        console.log(i);
    }
}
displayInterval(400,405);

function displaySign(sign, times) {
    for (let i = 0; i < times; i++) {
        console.log(sign);
    }
}
displaySign("$",3);