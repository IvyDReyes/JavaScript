//Display the entire array
function displayNames(names) {
    console.log(names);
}
const students = ["Laurel", "Yanni"];
displayNames(students);

//Display the length of an array
function displayNames1(names) {
    console.log(names.length);
}
const students1 = ["Laurel", "Yanni"];
displayNames1(students);

//Display the single element of an array
function displayNames2(names) {
    console.log(names[0]);
}
const students2 = ["Laurel", "Yanni"];
displayNames2(students);

//Display multiple elements from an array to return a certain kind of output
function getListOfNames(names) {
    return names[0] + ", " + names[1];
}
const students3 = ["Vera", "Rubin"];
const list = getListOfNames(students3);
console.log(list);
