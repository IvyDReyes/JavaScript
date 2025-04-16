class Employee {
    constructor(company) {
        this.company = company;
    }
}
class Lawyer extends Employee {
    work() {
        console.log("Time to make justice!");
    }
}
const employee1 = new Lawyer("Human Rights Lawyers Limited");
employee1.work();