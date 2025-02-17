class Officer {
    duty() {
        console.log("Protect and serve.")
    }
}
class Detective extends Officer{
    duty() {
        console.log("Interview witnesses");
    }
    
}
const sherlock = new Detective();
sherlock.duty();