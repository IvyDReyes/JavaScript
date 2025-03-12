//To access elements stored in multiple arrays using the same function, we pass the arrays as arguments when calling the function.
const grades = [92, 66, 77, 84];
const grades2 = [50, 60, 70, 80];

function searchGrade(grades, grades2) {
    console.log(grades);
    console.log(grades2);
}
searchGrade(grades, grades2);


//Once we've passed an array to a function, we can iterate over the array elements.
const grade3 = [91, 66, 77, 84];

function searchGrade1(grade3) {
    const len = grade3.length
    for(let i = 0; i < len; i++) {
    console.log(grade3[i]);
    }
}
searchGrade1(grade3);



const grade4 = [91, 66, 77, 84, 66];
const search = 66;

function searchGrade2(grade4, search) {
    for(let i = 0; i < grade4.length; i++) {
        if (grade4[i] === search) {
            console.log("The grade exists!");
            break; // the break statement is used to exit the loop immediately once the first occurrence of the search value (66) is found in the grade4 array.
        }
    }
}
searchGrade2(grade4, search);

const one = [91, 66, 77, 84, 68];
const two = [81, 66, 78, 88, 98];

function compareArrays(one, two) {
    for(let i = 0; i < one.length; i++) {
        if(one[i] === two[i]) {
            console.log("Common element:", one[i]);
        }  
    }
//return false;
}
compareArrays(one, two);

const prices = [99, 129, 149];
const discount = 0.1;

function applyDiscount(prices, discount) {
    for (let i = 0; i < prices.length; i++) {
        console.log(prices[i] * discount);
    }
}
applyDiscount(prices, discount);

const prices1 = [99, 129, 149];
const discounts = [0.1, 0.2, 0.25];

function getValues(prices1, discounts) {
    const values = [];
    for (let i = 0; i < prices1.length; i++) {
        values[i] = prices1[i] * discounts[i];
    }
    console.log(values);
}
getValues(prices1, discounts);