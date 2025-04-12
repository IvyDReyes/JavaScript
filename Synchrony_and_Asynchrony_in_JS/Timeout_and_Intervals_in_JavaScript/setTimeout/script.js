/* 

setTimeout(callback, delay);

Parameters:
callback – A function that you want to execute after the delay.
delay – The time to wait before running the function, in milliseconds (1 second = 1000 milliseconds).

*/

console.log('1');

setTimeout(() => {
     console.log('Executed after 2 seconds');
}, 2000);

console.log('2');



function callback() {
    console.log("Executed Last because of setTimeout");
}

console.log('Executed First');
setTimeout(callback, 2000);
console.log('Executed Second');