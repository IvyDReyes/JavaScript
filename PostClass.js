class Post {
     constructor(title) {
          this.title = title;
          this.body = "";
          this.likes = 0;
     }
     like() {
          this.likes++;
     }
}
const post1 = new Post("react");
const post2 = new Post("es6");
post1.body = "Makes front end so easy";
post2.body = "I love arrow functions and classes";
post1.like();
post2.like();
console.log(post1);
console.log(post2);