/** Exercise 1:
 * Write a JavaScript program to check two number and return true if one of the number is 100 or if the sum of the two numbers is 100
 */

function checkNumbers(num1, num2) {
    if (num1 === 100 || num2 === 100) {
        return true;
    }

    if (num1 + num2 === 100) {
        return true;
    }
    return false;
}

const result1 = (checkNumbers(100, 0)); // true
console.log(`100, 0: ${result1}`);

const result2 = (checkNumbers(50, 50)); // true
console.log(`50, 50: ${result2}`);

const result3 = (checkNumbers(50, 25)); // false
console.log(`50, 25: ${result3}`);






const isEqualTo100 = (a, b) => {
  if (a === 100 || b === 100 || a + b === 100) {
    return true;
  } else {
    return false;
  }
};

const result4 = isEqualTo100(100, 0);
console.log(`100, 0: ${result4}`);

const result5 = isEqualTo100(50, 50);
console.log(`50, 50: ${result5}`);

const result6 = isEqualTo100(50, 25);
console.log(`50, 25: ${result6}`);