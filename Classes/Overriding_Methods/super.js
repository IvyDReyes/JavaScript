class Human {
    constructor(weapon) {
        this.weapon = weapon;
        this.health = 100;
    }
    attack() {
        console.log("Swing " + this.weapon);
    }
}
class Wizard extends Human {
    attack() {
        super.attack(); // Used when you want to extend or enhance the behavior of a method rather than completely replacing it.
        console.log("Zimzalabim!")
    }
}
const wizard = new Wizard("staff");
wizard.attack();
