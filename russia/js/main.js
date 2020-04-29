const sx =50;
const sy =50;
const width =  150 ;
const height = 200;
var speed = 300;
var plate;
const size = 10;
var queue= new Queue();
var context;
var score;
window.onload = function () {
    context = new Context();
    var bt_start = document.getElementById('start');
    document.getElementById('score').append(score.score);
    document.getElementById('speed').append(speed);
    bt_start.onclick = function () {
        context.toPlay();
    }
}
