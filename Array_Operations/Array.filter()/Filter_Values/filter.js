//.filter() creates a new array with values that satisfy a condition
const participants = ["Ben", "Sarah", "Eli", "Henry", "Sean", "Annabel"];
const sNames = participants.filter(function(element){
    return element[0] === "S";
});
console.log(sNames);



const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const workWeek = week.filter(function(day, i){
return (i > 0 && i < 6);
});
console.log(workWeek);



const testScores = [72, 95, 90, 71, 75, 79];
const arr = testScores.filter(score => score >= 90);
console.log(arr);


const finishers = ["Sarah", "Sally", "Jake", "Alex", "Tori"];
const top3 = finishers.filter((finisher, place) => place < 3);
console.log(top3);