class Human {
    constructor(weapon) {
        this.weapon = weapon;
        this.health = 100;
 
   }
   receiveDamage() {
    this.health = this.health - 10; // When receiveDamage() is called, they lose 10 health.
   }
}
class Wizard extends Human {
    receiveDamage() {
        this.health = this.health - 5;
    }
}
const human = new Human("ax");
human.receiveDamage();
console.log(human.health);

const wizard = new Wizard("staff");
wizard.receiveDamage();
console.log(wizard.health);