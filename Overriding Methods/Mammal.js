class Mammal {
    eat(food) {
        console.log(food + " nom nom");

    }
}
class Rabbit extends Mammal {
    eat(food) {
        if (food === "lettuce") {
            console.log("nibbling " + food + " nom nom")
        }
    }
}
const mammal1 = new Mammal();
mammal1.eat("lettuce");
const rabbit2 = new Rabbit();
rabbit2.eat("lettuce");