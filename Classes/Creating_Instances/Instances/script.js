class User {
    constructor(name) {
        this.name = name;
        this.isOnline = true;

    }
}
const user1 = new User("Arya"); //instance of a class
user1.isOnline = false;
const user2 = new User("Bran");
console.log(user1);
console.log(user2);


class Food {
    constructor(name, calories) {
        this.name = name;
        this.calories = calories;
    }
}
const banana = new Food("banana", 105);
console.log(banana);
const rice = new Food("rice", 50);
banana.calories = banana.calories / 2;
console.log(rice);
const pizza = new Food("pizza", 350);
console.log(pizza);