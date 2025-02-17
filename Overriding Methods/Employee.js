class Employee {
    constructor(salary) {
        this.salary = salary;
    }
    work() {
        console.log("Clocked in");
    }
}
class Chef extends Employee{
    constructor(salary, knife) {
        super(salary);
        this.knife = knife;
    }
    work() {
        super.work();
        console.log("Chopping with " + this.knife);
    }
}
const joe = new Chef("50000", "pearing");
joe.work();