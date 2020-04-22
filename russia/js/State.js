class  State {
    constructor(){
        this.stateName ='';
    }
}
class Context {
    constructor(){
        this.state = new New();
    }
    start(){
        this.state.start(this);
    }
    game(){
        this.state.game(this);
    }
    stop(){
        console.log(this.state.stateName.toString());
        this.state.stop(this);
    }
    show(){
        this.state.showHistory();
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
    start(context){
        //console.log(context);
        if(context.state.stateName === '新建'){

            context.setState(new play());
            context.game(context);
        }
    }
}
class play extends State{
    constructor(){
        super();
        this.box = undefined;
        super.stateName = '游戏';
        console.log("game");
    }
    game(context){
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
    stop(context){
        if(context.state.stateName === '游戏'){
            //clearInterval(this.t);
            console.log("game to stop");
            context.setState(new finish());
            context.show();
        }
    }
}
class finish extends State{
    constructor(){
        super();
        super.stateName = '结束';
        console.log("over");
    }
    showHistory(){
        window.location.href='../h5/history.html?score='+score.score+'&add=true';
    }
    renew(context){
        if(context.stateName == '结束'){
            context.setState(new New());
        }
    }
}