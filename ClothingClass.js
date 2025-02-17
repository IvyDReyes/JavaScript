class Clothing {
     constructor(name, size) {
          this.name = name;
          this.size = size;
     }
}

const shirt1 = new Clothing("tshirt", "L");
const pants1 = new Clothing("joggers","M");
console.log(shirt1);
shirt1.size = "S";
console.log(shirt1);