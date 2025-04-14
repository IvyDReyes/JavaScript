let obtainGrade = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Your overall grade for the semester is B+"), 2000);
});

async function printGrades() {
    let value = await obtainGrade;
    console.log(value);

}
printGrades();