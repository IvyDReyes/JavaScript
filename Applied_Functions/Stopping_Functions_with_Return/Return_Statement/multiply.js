//Use return statements to retun a value from a function.

function multiplyByTen(number) {
    console.log("This will get executed");
    return number * 10;
    console.log("This won't get executed");
    return "This line doesn't execute"
}
const result = multiplyByTen(29);
console.log(result); // 290


//If we use a conditional statements, we can use return to stop a function at different parts of the code based on the input.
function getDiscount(age) {
    if (age >= 65) {
        return "50% OFF"
    } 
    return "0% OFF";
}
const discount = getDiscount(67);
console.log(discount); // 50% OFF

//We can use the last return statement to catch the last possible case.
function getDiscount1(age) {
    if (age <= 18) {
        return "50% OFF"
    } else if (age >= 65) {
        return "30% price";
    }
    return "Full price";
 }

 