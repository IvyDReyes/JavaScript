class Tool {
    constructor(brand, cost) {
        this.brand = brand;
        this.cost = cost;
    }
}
class Saw extends Tool {
    constructor(brand, cost, blade) {
        super(brand, cost);
        this.blade = blade;
    }
}
const jigsaw = new Saw("ABC", 99, "small");
console.log(jigsaw);
