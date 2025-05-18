/** Exercise 5:
 * Write a JavaScript program to create a new string adding "New"! in front of a given string. If the given string begins with "New"! already then return the original string.
 * 
 */ 






// const addNew = (str) => 
//     str.indexOf('New!') === 0 ? str : `New! ${str}`;

// console.log(addNew("Hello")); // Output: New! Hello


const addNew = (str) => {
  if (str.startsWith("New!")) {
    return str;
  }
  return `New! ${str}`;
};

console.log(addNew("Hello"));       // Output: New! Hello
console.log(addNew("New! Product")); // Output: New! Product