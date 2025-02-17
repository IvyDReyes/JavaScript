class Account {
    constructor(name, number) {
        this.name = name;
        this.number = number;
        this.active = true;
    }
}
const account1 = new Account("Bob's Supplies",1);
const account2 = new Account("Tara Consulting",2);
account1.active = false;
account2.active = false;