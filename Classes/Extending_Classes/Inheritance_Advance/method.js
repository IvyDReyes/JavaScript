class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is eating");
    }
}
class Dog extends Animal {}
const dog = new Dog("Pug");
dog.eat();