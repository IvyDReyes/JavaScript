class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is eating");
    }
}
class Dog extends Animal {}
class Bird extends Animal {}
const dog = new Dog("Chocolate Lab");
const bird = new Dog("Blue Jay");
dog.eat();
bird.eat();