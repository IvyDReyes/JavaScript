class Book {
    constructor(title) {
        this.title = title;
        this.page = 1;
    }
    setBookmark(page) {
        this.page = page;
 }
}
class Cookbook extends Book {}
const cookBook = new Cookbook("Pie");
cookBook.setBookmark(11);
