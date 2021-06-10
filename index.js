
// for (var i = 0; i<document.querySelectorAll(".songs").length;i++){
//     document.querySelectorAll(".songs")[i].addEventListener("click",playSong);
// }



// function playSong(){
//     var audio = new Audio('sounds/Fall-Apart.mp3');
//     audio.play(); 
    


//     // alert("I got clicked");
//     console.log(this.innerHTML); 
// }
// var songSelection = document.querySelector(".songs") ;
// var getPause = document.querySelector(".pause");
// var songPlaying =songSelection.addEventListener("click",playSong);
// var songPause = getPause.addEventListener("click",pauseSong);
// var a1 = document.querySelector("#audio1");


// function playSong(){
//     a1.play();
//     this.innerHTML="Playing...";
//     getPause.innerHTML="Pause";

// }
// function pauseSong(){
//     a1.pause();
//     this.innerHTML="Paused";
//     songSelection.innerHTML="Play";
// }

const music = document.querySelector("audio");
const imgSelect = document.querySelector("img");
const playSong = document.querySelector("#play");
const artist = document.querySelector("#artist");
const title = document.querySelector("#title");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");


// Creating Array of an object to make a list of songs and information of songs

const songsInfo = [
    {
        songName : "Can't-lie",
        title : "Can't Lie",
        artist : "Ali Gatie",
        image : "aligatie",
        
    },
    {
        songName : "Fall-Apart",
        title : "Fall Apart",
        artist : "Post Malone",
        image : "postmalone",
    },
    {
        songName : "Perfect",
        title : "Perfect",
        artist : "Cole Norton",
        image : "colenorton",
    },
    {
        songName : "Love",
        title : "Love",
        artist : "Finding Hope",
        image : "love",
    },
    {
        songName : "Behos",
        title : "Behos",
        artist : "Subash Pandey",
        image : "subash",
    },
    {
        songName : "Katai Uslai",
        title : "Katai Uslai",
        artist : "Bipul Chettri",
        image : "kataiusali",
    },
    {
        songName : "MAYA",
        title : "MAYA",
        artist : "Aayush KC",
        image : "maya",
    },
    {
        songName : "Birsiney Hau Ki",
        title : "Birsiney Hau Ki",
        artist : "The Elements",
        image : "elements",
    },
    {
        songName : "Don't Watch Me Cry",
        title : "Don't Watch Me Cry",
        artist : "Alexandra Porat",
        image : "alexandra",
    },
    {
        songName : "Muskuraye",
        title : "Muskuraye",
        artist : "Astha Tamang Maskey",
        image : "astha",
    },
    {
        songName : "Forever",
        title : "Forever",
        artist : "Lewis Capaldi",
        image : "lewis",
    },
    {
        songName : "Control",
        title : "Control",
        artist : "Zoe Wess",
        image : "zoe",
    },
    {
        songName : "Got Away",
        title : "Got Away",
        artist : "Katy Perry ",
        image : "katy",
    },
]

let isPlaying = false;

const playMusic = () =>{
    isPlaying = true;
    music.play();
    playSong.classList.replace("fa-play","fa-pause");
    imgSelect.classList.add("anime");
};

const pauseMusic = () =>{
    isPlaying = false;
    music.pause();
    playSong.classList.replace("fa-pause","fa-play");
    imgSelect.classList.remove("anime");

};


playSong.addEventListener("click", () =>{
    // if(isPlaying == false){
    //     pauseMusic();
    // }
    // else{
    //     playMusic();
    // }
    isPlaying? pauseMusic() : playMusic();
});

const loadSongs = (songsInfo) => {
    title.textContent = songsInfo.title;
    artist.textContent = songsInfo.artist;
    music.src = "sounds/" + songsInfo.songName + ".mp3";
    imgSelect.src = "images/" + songsInfo.image + ".jpg";
};

let songIndex = 0;
const nextSong = () => {
    //songIndex++; //This is used for the play next song
    songIndex = (songIndex + 1) % songsInfo.length;// But this is used for the play next song and apply loop if songs in the list are finished.

    loadSongs(songsInfo[songIndex]);
    playMusic();

};
function prevSong(){
    // songIndex--;
    songIndex = (songIndex - 1 + songsInfo.length) % songsInfo.length; //Formula of loop
    loadSongs(songsInfo[songIndex]);
    playMusic();
};
prev.addEventListener("click", prevSong);
next.addEventListener("click", nextSong);
