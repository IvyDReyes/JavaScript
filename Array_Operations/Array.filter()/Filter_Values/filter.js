//.filter() creates a new array with values that satisfy a condition
const participants = ["Ben", "Sarah", "Eli", "Henry", "Sean", "Annabel"];
const sNames = participants.filter(function(element){
    return element[0] === "S";
});
console.log(sNames);