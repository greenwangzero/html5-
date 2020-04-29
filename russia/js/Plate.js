class  Plate {
    constructor(){
        draw_plate();
        this.res = new Array();
        this.initPlate();

    }
     initPlate(){
        for(let i=0;i<height/10;i++){
            this.res[i]= new Array();
            for (let j=0;j<width/10;j++){
                this.res[i][j]= 0 ;
            }
        }
    }
    check(box,x){
        for(let i= 0;i<width/10;i++){
            if(this.res[x][i]!==1)
                return false
        }
        return true;
    }
    addBox(box){
        for(let i=0;i<box.place.length;i+=2){
            var x = box.place[i];
            var y = box.place[i+1]!== 0 ? box.place[i+1]: 0;
            if(x>=0 && plate.res[x][y]===0){
                plate.res[x][y]=1;
            }
            else if(x<0){
                //判断游戏失败:添加的方块在面板外
                console.log('error');
                //clearInterval(context.state.t);
                context.finish();
            }
        }
    }
    update(box){
        this.addBox(box);
        for(let i=0;i<height/10;i++){
            if(this.check(box,i)){
                this.eliminate(i);
                score.update();
            }
        }
        update_plate();
        // box = undefined;
        box.renew= true;
    }
    eliminate(i){
        this.res.splice(i,this.res[0].length);
        this.res.splice(0,0,[]);
    }
}