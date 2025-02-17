class Scooter {
    constructor(rider) {
        this.rider = rider;
    }
}
class ElectricScooter extends Scooter {
    constructor(rider, battery) {
        super(rider);
        this.battery = battery;
    }
    ride() {
        console.log("Hi " + this.rider + ". Battery life left: " + this.battery);
    }
}
const lime = new ElectricScooter("Tulip", "Everedy")
const bird = new ElectricScooter("Goji Miming", "Everydy");
lime.ride();
bird.ride();