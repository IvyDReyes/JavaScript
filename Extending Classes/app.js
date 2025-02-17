class Appliance {
    constructor() {
        this.volts = 120;
    }
}
class Toaster extends Appliance {}
class Blender extends Appliance {}
const toaster = new Toaster();
const blender = new Blender();
console.log(toaster);
