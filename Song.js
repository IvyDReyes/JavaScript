class Song {
    constructor() {
        this.title = "";}
    
    play() {
        console.log("Playing " + this.title);
    }
}
const song1 = new Song();
song1.title = "Remember";
song1.play();
