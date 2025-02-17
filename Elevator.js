class Elevator {
    constructor() {
        this.floor = 0;
    }
    goToFloor(floor) {
    this.floor = floor;
    console.log(this.floor);
    }
}
const elevator1 = new Elevator();
const elevator2 = new Elevator();
elevator1.goToFloor(3);
elevator2.goToFloor(5);