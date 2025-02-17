class Employee {
    constructor(company) {
        this.company = company;
    }
    clockIn() {
        console.log("Starting my work at " + this.company);
 }
}
class Lawyer extends Employee {
    work() {
        console.log("Time to make justice!")
    }
}
const employee1 = new Lawyer("Human Rights Lawyers Limited");
employee1.work();
