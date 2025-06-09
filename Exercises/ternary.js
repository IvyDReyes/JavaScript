let hungry = false;
// if (hungry === true) {
//   console.log("Have a cookie!");
// } else {
//   console.log("No cookies for you!");
// }
hungry
? console.log("Have a cookie!") 
: console.log("No cookies for you!");



// function over9000(num) {
// if (num > 9000) {
//         return "It's over 9000!";
//      } else {
//         return "Taking a Nappa...";
//     }
// }

const over9000 = (num) => {
 return num > 9000
   ? "It's over 9000!"
  : "Taking a Nappa...";
}
