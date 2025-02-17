class Rodent {
    eat(food) {
        console.log(food + " nom nom");
    }
}
class Hamster extends Rodent {
    eat(food) {
        if (food === "carrots") {
            super.eat(food);
        }
    }
}