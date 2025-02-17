class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {}
const dog = new Dog ("Pug");
dog.bark(); // Woof
const bird = new Animal("Parrot");
bird.bark(); // TypeError: bird.bark is not a function

