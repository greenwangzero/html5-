class Score {
    constructor(){
        this.score = 0;
    }
    update(){
        //update score
        this.score++;
        console.log("score++");
        document.getElementById('score').innerHTML ='成绩：'+this.score;
        //update_speed per 5
        this.update_speed();
    }
    update_speed(){
        if(this.score%2 == 0){
            speed -= 50;
            speedLevel++;
            if(speed<100) speed=100;
            document.getElementById('speed').innerHTML ='speed：'+speedLevel;
        }
    }
}