class Arthropod {
    constructor(legs) {
        this.legs = legs;
    }
}
class Insect extends Arthropod {}
const ant = new Insect(6);
console.log(ant.legs);