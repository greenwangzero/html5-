class  State {
    constructor(){
        this.stateName ='';
    }
}
class Context {
    constructor(){
        this.state = new New();
    }
    toNew(){
        this.state.toNew(this);
    }
    toPlay(){
        this.state.toPlay(this);
    }
    toFinish(){
        console.log(this.state.stateName.toString());
        this.state.toFinish(this);
    }
    setState(s){
        this.state= s;
    }
}
class New extends State{
    constructor(){
        super();
        super.stateName = '新建';
        console.log('新建');
        this.newing();
    }
    newing(){
        plate = new Plate();
        score = new Score();
    }
    toPlay(context){
        //console.log(context);
        if(context.state.stateName === '新建'){
            context.setState(new Play());
        }
    }
}
class Play extends State{
    constructor(){
        super();
        this.box = undefined;
        super.stateName = '游戏';
        console.log("game");
        this.playing();
    }
    playing(){
         this.t= setInterval(function () {
            if(  this.box == null || this.box.renew == true ){
                queue.clean();
                let boxFactory = new BoxFactory();
                this.box = boxFactory.getBox();
                update_next(boxFactory.getNextBox());
                this.box.renew = false;
            }
            draw_work(this.box);
        },speed);
        document.onkeydown = function keyEvent(e){
            queue.enqueue(e.keyCode);
        }
    }
    toFinish(context){
        if(context.state.stateName === '游戏'){
            clearInterval(this.t);
            console.log("game to stop");
            context.setState(new Finish());
        }
    }
}
class Finish extends State{
    constructor(){
        super();
        super.stateName = '结束';
        console.log("over");
        this.finishing();
    }
    finishing(){
        window.location.href='../h5/history.html?score='+score.score;
    }
    toNew(context){
        if(context.stateName == '结束'){
            context.setState(new New());
        }
    }
}