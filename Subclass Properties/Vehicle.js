class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    start() {
        console.log("Starting " + this.make + " " + this.model);
    }
}
class Boat extends Vehicle {
    constructor(make, model, type) {
        super(make, model);
        this.type = type;
    }
    start() {
        super.start();
        console.log("Value of Boat Class Type " + this.type)
    }
}
const powerboat = new Boat("SEA RAY", "L650", "Power");
powerboat.start();