class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
class Rectangle extends Shape {}
class Square extends Shape {}
const rect = new Rectangle(3, 4);
console.log(rect);
const sqr = new Rectangle(3, 3);
console.log(sqr);