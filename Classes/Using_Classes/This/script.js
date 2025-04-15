class Book {
    constructor(author, title) {
        this.author = author; //keyword to refer to the object being created. period and the property name. assign the author parameter as a value to this.author
        this.title = title;
    }
}

const book1 = new Book("Leo Tolstoy", "War and Peace");

const book2 = new Book("Dr. Seuss", "Oh, the Places You'll Go!");
console.log(book1);
console.log(book2);
