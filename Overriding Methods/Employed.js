class Employee {
    work() {
        console.log("Clocking in");
    }
}
class Server extends Employee {
    work() {
        super.work();
        console.log("Time to take orders");
    }
    
}
const alex = new Server();
alex.work();