class Playlist {
    constructor() {
        this.songs = [];
    }
    addSong(song) {
        this.songs.push(song);
    }
    play (){
        //console.log(this.songs); this will display all songs in one line
        for (let i = 0; i < this.songs.length; i++) {
            console.log(this.songs[i]); //will display the songs one at a time, per line
        }
    }
     remove(){
         this.songs.pop();
     }   
}


const myPlaylist = new Playlist();
myPlaylist.addSong("Alright SDSDSD, DSDSDS");
myPlaylist.addSong("SDSDSD, DSDSDS");
myPlaylist.addSong("RRRRR");
myPlaylist.play();

