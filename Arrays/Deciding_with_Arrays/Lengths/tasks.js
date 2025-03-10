//Use the word "length" to get the number of elements in an array
const tasks = ["dishes","windows", "vacuum"];
const length = tasks.length;
console.log(length);

//Use the length of an array to create a conditional statements that depend on its number of elements
const tasks1 = ["dishes", "windows", "vacuum"];
if (tasks1.length > 0) {
    console.log("Ugh, more work!")
}

//Can also use the length of an array to create a for loops that go through all of its elements
const friends = ["Ana", "Eve", "Sam"];
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}