class Currency {
    constructor(symbol) {
        this.symbol = symbol;
    }
}
class Yen extends Currency {}
const yen = new Yen("Y");
class Dollar extends Currency {}
const dollar = new Dollar("$");
console.log(yen);
console.log(dollar);