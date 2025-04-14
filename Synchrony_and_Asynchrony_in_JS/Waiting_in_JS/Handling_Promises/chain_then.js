const dessertStock = {
    cheeseCake: {
        inStockAmount: 10,
        price: 5
    },
    spongeCake: {
        inStockAmount: 0,
        price: 7
    }
};
const budget = 10;

function isAvailable() {
    return new Promise(function(resolve, reject){
        if (dessertStock.spongeCake.inStockAmount > 0) {
            resolve(true);
        } else { 
            reject("The sponge cake is out of stock.. Canceling the order..");
        }
    });
}

function checkPrice(productAvailable) {
return new Promise(function(resolve, reject) {
    if (productAvailable && dessertStock.spongeCake.price <= budget) {
        resolve("Reasonable price. Purhasing..");
    } else {
        reject("Too expensive. Canceling the order..");
    }
});    
}

function handleIsAvailable(isAvailable) {
    return checkPrice(isAvailable);
}

function handleCheckPrice(successValue) {
    console.log(successValue);
}

function handleFailure(failureValue) {
    console.log(failureValue);
}

const checkAvailability = isAvailable();

checkAvailability
.then(handleIsAvailable)
.then(handleCheckPrice)
.catch(handleFailure);

