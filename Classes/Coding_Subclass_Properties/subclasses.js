class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log("I am a " + this.name);
    }
}
class Dog extends Animal {
    constructor(name, trainer) {
        super(name); // It's how a subclass can reuse and initialize parts of its parent.
        this.trainer = trainer; 
    }
    speak() {
        super.speak();
        console.log("My trainer is " + this.trainer);
    }
}
const rover = new Dog("Lab", "Terry");
rover.speak();