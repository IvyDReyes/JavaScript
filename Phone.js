class Phone {
    constructor(number) {
        this.number = number;
        this.doNotCall = false;
    }
}
const phone1 = new Phone("3455556632");
const phone2 = new Phone("4685559441");
phone1.doNotCall = true;
console.log(phone1);
console.log(phone2);