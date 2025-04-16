class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {}
const dog = new Dog("Pug");
console.log(dog.name);