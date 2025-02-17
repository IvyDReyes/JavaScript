class Animal {
    pet() {
        console.log("growl");
    }
}
class Cat extends Animal {
    pet() {
        console.log("Prrrrr")
    }
 }
    
const mindy = new Cat();
mindy.pet();