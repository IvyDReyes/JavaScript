const airMimo = {
    fleet: 150,
    avgPrice: 750
};

const purchaseTicket = new Promise(function (resolve, reject) {
    if (airMimo.avgPrice < 700) {
        resolve("Purchasing ticket.");
    } else {
        reject("Too expensive. Searching for alternatives.");
    }
});

async function buyTicket() {
    try {
        let result = await purchaseTicket;
        console.log(result);
    } catch (error ) {
        console.log(error);
    }
}
buyTicket();