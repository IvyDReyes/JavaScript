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
        if (dessertStock.cheeseCake.inStockAmount > 0) {
            resolve(true);
        } else {
            reject(false);
        }
    });
}

function checkPrice(productAvailable) {
return new Promise(function(resolve, reject) {
    if (productAvailable && dessertStock.cheeseCake.price <= budget) {
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

const checkAvailability = isAvailable();
checkAvailability.then(handleIsAvailable).then(handleCheckPrice);

