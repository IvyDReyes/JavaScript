class Appliance {
    constructor(brand) {
        this.brand = brand;
    }
}
class Dishwasher extends Appliance {}
const kitchenAppliance = new Dishwasher("Laundrys");
console.log(kitchenAppliance); // Dishwasher { brand: 'Laundrys' }
