const getPrice = (total) => {
    const discount = 0.10;
    return total - (discount * total);
};
console.log(getPrice(500));

//In arrow functions, we don't have to add the parenthesis if we have only one parameter.
const getPrice1 = total => {
    const discount1 = 0.10;
    return total - (discount1 * total);
}
console.log(getPrice1(500));


//If a function call doesn't pass a value, the function will use undefined as the value.
const getPrice2 = (total) => {
    const tax = 0.16;
    return total + (tax * total)
};
console.log(getPrice2());

//To avoid undefined values, we specify the default value inside the parenthesis.
const getPrice3 = (total1 = 200, discount2 = 3) => 
    total1 - (discount2 / 100 * total1);
    console.log(getPrice3); 
    
console.log(getPrice3()); 