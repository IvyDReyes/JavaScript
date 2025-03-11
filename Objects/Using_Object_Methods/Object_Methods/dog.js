//Similar to properties, we can group related functions into objects.
//  Functions inside an object are called the object's methods.

var dog = {
    name: "Bo",
    bark: function(word) {
        return "woof woof, " + word;
    }
};
console.log(dog.bark("hungry"));