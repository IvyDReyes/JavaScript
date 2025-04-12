const sayHello = (names, callback) => {
    console.log(`Hello ${names}`)
    callback();
};

const sayGoodbye = () => 
    console.log("Goodbye!");

sayHello("John", sayGoodbye);
// Output: Hello John
// Output: Goodbye!



function callbackFunc() {
    console.log("Executed last because we're using asynchronous code.");
}
setTimeout(callbackFunc, 1500);
console.log('Executed first');
console.log('Executed second');

