// .reduce() method can combined Array values into a value using an inline function

const miles = [33, 95, 79];
const total = miles.reduce(function(prev, curr){
    return prev + curr;
});
console.log(total); // 207

const miles1 = [33, 95, 79];
const total1 = miles1.reduce((prev, curr) => prev + curr);
console.log(total1); // 207


const prices = [17.50, 20.25, 24.75, 13.50, 8.50];
const discountFactor = [0.9, 0.9, 1.0, 1.0, 0.9];
const total2 = prices.reduce(function(prevVal, currVal, index){
    return prevVal + (currVal * discountFactor[index]); 
});
console.log(total2); // 81.45