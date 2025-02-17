class ToothBrush {
    brush() {
        console.log("Cleaning teeth.");
    }
}

class ElectricToothBrush extends ToothBrush {
    brush() {
        super.brush();
        console.log("Bzzzzzzzzzzzzzzzzzzzzzzzzz");
    }
}

const myBrush = new ElectricToothBrush();
myBrush.brush();
