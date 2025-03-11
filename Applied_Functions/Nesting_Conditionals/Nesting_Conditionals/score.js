//Instructions outside of nested code blocks still get executed, even if the code inside the conditional statement gets skipped.

function hasFailed(score) {
    console.log("Checking Score");
    if (score <= 50) {
        console.log("Failed");
    }
}
hasFailed(80);


function getTaxedSalary(salary) {
    if (salary > 2100) {
        salary = salary - 500;
    }
    return salary;
}
const income = getTaxedSalary(2100);
console.log(income);