class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
class Square extends Rectangle {
    constructor(side) {
        super(side, side);

    }
}