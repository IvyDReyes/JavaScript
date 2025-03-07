const song = "Don't stop me now";
let replayTimes = 345;
if (replayTimes >= 300) {
    console.log("Your top song this week:");
    console.log(song);
}

const diet = "vegetarian";
const veggieRestaurant = "Root";
const restaurant = "DelPosto";
if (diet === "vegetarian") {
    console.log("Try out: ");
    console.log(veggieRestaurant)
}

let today = "Sunday";
if (today !== "Saturday") {
    console.log("Set alarm at 8:00");
}

let age = 20;
let canDrive = false;
if (age > 18) {
    canDrive = true;
}
console.log(canDrive);

let inboxFull = true;
const showAlert = inboxFull === true;
if (showAlert) {
    console.log("Your inbox is full.");
    console.log("You can't receive any more emails")
}

let flightModeOn = true;
if (flightModeOn === true) {
    console.log("Turn flight mode off to connect to the internet");
}