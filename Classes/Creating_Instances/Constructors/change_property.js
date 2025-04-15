class Sport {
    constructor(name) {
        this.name = name;
        this.scoreValue = 0;
    }
}
const sport1 = new Sport("Football");
const sport2 = new Sport("Soccer");

sport1.scoreValue = 6;
sport1.scoreValue = 1;

console.log(sport1);
console.log(sport2);