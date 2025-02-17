//explain this code
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
        super.attack();
        console.log("Zimzalabim!");
 }
}
const wizard2 = new Wizard("staff");
wizard2.attack(); 
