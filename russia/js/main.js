var sx = 50;
var sy = 50 ;
const width =  150 ; //150
const height = 200 ;  //200
var speed = 300;
var speedLevel = 1;
var plate;
const size = 10;
var queue= new Queue();
var nextBox = new Queue();
var context;
var score;
var audioElement ;
window.onload = function () {

    var bt_start = document.getElementById('start');
    audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../source/eliminate.mp3');
    //sx = document.getElementById('center').getBoundingClientRect().left;
    //sy = document.getElementById('center').getBoundingClientRect().top;
    context = new Context();
    document.getElementById('score').append(score.score);
    document.getElementById('speed').append(speedLevel);
    bt_start.onclick = function () {
        context.toPlay();
    }
}
