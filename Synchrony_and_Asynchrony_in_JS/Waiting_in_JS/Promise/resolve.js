const dessertStock = {
    cheeseCake: 10,
    moltenCake: 7,
    spongeCake: 0
};

function orderCheeseCake() {
    return new Promise(function(resolve, reject){
        if (dessertStock.cheeseCake > 0) {
            resolve("Cheesecake is available in the stock. Order has been processed.");
        }
    }) 

}

const makeOrder = orderCheeseCake();
console.log(makeOrder);