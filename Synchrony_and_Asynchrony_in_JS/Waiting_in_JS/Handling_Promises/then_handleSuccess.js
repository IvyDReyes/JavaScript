const dessertStock = {
    cheeseCake: 10,
    moltenCake: 7,
    spongeCake: 0
};

function orderCheeseCake() {
    return new Promise(function(resolve, reject){
        if (dessertStock.cheeseCake > 0) {
            resolve("Cheesecake is available in the stock. Order has been processed.");
        } else {
            reject("Cheesecake is sold out.");
        }
    }); 
}

function handleSucess(successValue) {
    console.log(successValue);
}
const makeOrder = orderCheeseCake();
makeOrder.then(handleSucess);
