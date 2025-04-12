const grades = {
math: 70,
science: 88,
history: 63
};

function checkMathGrades() {
    return new Promise(function(resolve, reject){
        if (grades.math > 50) {
            resolve("Congratulations! You have passed the math exam.");
        } else {
            reject("Unfortunately, you have failed the math exam.");
        }
    });
}

let checkGrades = checkMathGrades();
console.log(checkGrades);
