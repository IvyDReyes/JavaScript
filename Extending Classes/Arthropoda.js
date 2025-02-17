class Arthropoda {
    constructor(legs) {
        this.legs = legs;
    }
    crawl() {
        console.log("crawling on " + this.legs + " legs")
    }
}
class Insect extends Arthropoda {}
const ant = new Insect(6);
ant.crawl();