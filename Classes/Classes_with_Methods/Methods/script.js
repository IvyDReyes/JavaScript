class VirtualPet {
    constructor(name) {
        this.name = name;
    }
    eat(food) {
       if (food === "treats") {
        console.log("nom nom");
       } else {
        console.log("discard");
       }
        
  }
}               

const pet = new VirtualPet ("Tom");
pet.eat("treats");