class Tool {
    constructor(action) {
        this.action = action;
    }
    use() {
        console.log("Starting to " + this.action)
    }
}
class Drill extends Tool {}
const tool1 = new Drill("drill");
tool1.use();