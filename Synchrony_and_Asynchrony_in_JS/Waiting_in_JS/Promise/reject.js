const dessertStock1 = {
    cheeseCake: 10,
    moltenCake: 7,
    spongeCake: 0
};

function orderSpongeCake() {
    return new Promise(function(resolve, reject){
        if (dessertStock1.spongeCake > 0) {
            resolve("Sponge cake is available in the stock. Order has been processed.");
        } else {
            reject("Sponge cake is sold.");
        }
    }); 

}
const makeOrder1 = orderSpongeCake();
console.log(makeOrder1);

//UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Sponge cake is sold.".


