class Score {
    constructor(){
        this.score = 0;
    }
    update(){
        this.score++;
        console.log("soore++");
        document.getElementById('score').innerHTML ='成绩：'+this.score;
    }
}