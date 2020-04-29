class  State {
    constructor(){
        this.stateName ='';
    }
}
class Context {
    constructor(){
        this.state = new New();
    }
    new(){
        this.state.new(this);
    }
    lay(){
        this.state.play(this);
    }
    finish(){
        console.log(this.state.stateName.toString());
        this.state.finish(this);
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
        plate = new Plate();
        score = new Score();
    }
    play(context){
        //console.log(context);
        if(context.state.stateName === '新建'){
            context.setState(new Play()).then();
            context.play(context);
        }
    }
}
class Play extends State{
    constructor(){
        super();
        this.box = undefined;
        super.stateName = '游戏';
        console.log("game");
    }
    play(context){
         this.t= setInterval(function () {
            if(  this.box == null || this.box.renew == true ){
                queue.clean();
                this.box = new BoxFactory().getBoxInstance();
                this.box.renew = false;
            }
            draw_work(this.box);
        },speed);
        document.onkeydown = function keyEvent(e){
            queue.enqueue(e.keyCode);
        }
    }
    finish(context){
        if(context.state.stateName === '游戏'){
            clearInterval(this.t).then(function () {
                console.log("game to stop");
                context.setState(new Finish());
                context.finish();
            });
        }
    }
}
class Finish extends State{
    constructor(){
        super();
        super.stateName = '结束';
        console.log("over");
    }
    finish(){
        window.location.href='../h5/history.html?score='+score.score;
    }
    renew(context){
        if(context.stateName == '结束'){
            context.setState(new New());
            context.new();
        }
    }
}