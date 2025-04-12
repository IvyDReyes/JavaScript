// .catch() is a method used with Promises to handle rejections.

const dessertStock = {
    cheeseCake: 10,
    moltenCake: 7,
    spongeCake: 0
};

function orderSpongeCake() {
    return new Promise(function(resolve, reject){
        if (dessertStock.spongeCake > 0) {
            resolve("Sponge cake is available in the stock. Order has been processed.");
        } else {
            reject("Sponge cake is sold out.");
        }
    }); 
}

function handleSucess(successValue) {
    console.log(successValue);
}

function handleFailure(failureValue) {
    console.log(failureValue);
}

const makeOrder = orderSpongeCake();
makeOrder.then(handleSucess).catch(handleFailure);
