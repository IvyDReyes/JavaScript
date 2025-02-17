class Calculator {
     constructor() {
          this.value = 0;
     }

     print() {
          console.log(this.value);
     }

     add(amount) {
          this.value += amount;
     }

     subtract(amount) {
          this.value -= amount;
     }
}

const calc1 = new Calculator();
calc1.add(9);
calc1.subtract(6);
calc1.print(); // 3