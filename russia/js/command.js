//queue
function Queue() {
    let items = []
    this.clean = function () {
        items =[];
    }
    this.enqueue = function (element) {
        items.push(element)
    }
    this.dequeue = function () {
        return items.shift()
    }
    this.front = function () {
        return items[0]
    }
	this.second = function() {
		return item[1]
	}
    this.isEmpty = function () {
        return items.length === 0
    }
    this.size = function () {
        return items.length
    }
    this.print = function () {
        console.log(items.toString())
    }
}


function check_move(box,type){
    // -1 left
    // 1 right
    // 0 revolve
    // 2 down
    if (type == -1){
        //检查和面板&方块相碰
        for (let i=0; i< box.place.length;i+=2) {
            let x = box.place[i];
            let y = box.place[i+1]-1;
            //防止越界上面板
            let plateFlag = x<0 ? 0:plate.res[x][y];
            if(y<0 || plateFlag) return false;
        }
    }
    else if(type == 1){
        for (let i=0; i< box.place.length;i+=2) {
            let x = box.place[i];
            let y = box.place[i+1]+1;
            //防止越界上面板
            let plateFlag = x<0 ? 0:plate.res[x][y];
            if(y>= width/10 || plateFlag) return false;
        }
    }
    else if(type == 0) {
        let k=0;
        for (let p=0; p< box.order.length;p++) {
            let key = box.order[p];
            let j = key%10;
            let i = (key-j)/10;
            // console.log(i+" "+j);
            if(box.data[i][j]){
                this.x1 = -(j - 2) + 2;
                this.y1 = (i - 2) + 2;
                this.x2 = -(j + 1 - 2) + 2;
                this.y2 = (i + 1 - 2) + 2;
                this.x = Math.min(this.x1, this.x2);
                this.y = Math.min(this.y1, this.y2);
                // box.data[i][j] = 0;
                // box.data[this.x][this.y] = 1;

                //旋转后的方块不越界面板
                if (box.place[k] + this.x - i < 0 || box.place[k] + this.x - i >= height/10) return false;
                if (box.place[k + 1] + this.y - j < 0 || box.place[k + 1] + this.y - j >= width/10) return false;

                //旋转后的方块不与面板方块冲突
                let xx = box.place[k] + this.x - i;
                let yy = box.place[k + 1] + this.y - j;
                if(plate.res[xx][yy]) return false;

                k += 2;
            }

        }
    }
    else if(type  == 2){
        //检查box沉底
        // for (let i=0; i< box.place.length;i+=2) {
        //     if(box.place[i]+1>= height/10) {
        //         box.notify();
        //         return false;
        //     }
        // }
        //检查box沉底
        for(let i=0;i<box.place.length;i+=2){
            let x = box.place[i]+1 != 0 ? box.place[i]+1 : 0;
            let y = box.place[i+1];
            try{
                //与方块相碰&面板底部
                if( x>=height/10 || plate.res[x][y]) {
                    box.notify();
                    return false;
                }
            }
            catch (e) {
                console.log("error :"+e.toString()+plate.res);
                console.log(x +"+" +y);
            }
        }
    }
    return true;
}
//命令类
class  Left {
    constructor(){
        this.doLeft = new DoLeft();
    }
    do(box){
       return  this.doLeft .do(box);
    }
}
class  Right {
    constructor(){
        this.doRight = new DoRight();
    }
    do(box){
        return this.doRight .do(box);
    }
}
class Revolve{
    constructor(){
        this.doRevolve = new DoRevolve();
    }
    do(box){
        return this.doRevolve.do(box);
    }
}
class Down {
    constructor(){
        this.doDown = new DoDown();
    }
    do(box){
        return this.doDown.do(box);
    }
}
//接收者
class  DoLeft {
    constructor(){
    }
    do(box){
        if(check_move(box,-1)){
            for (let i=1; i< box.place.length;i+=2) {
                box.setplace(i,-1);
                // box.place[i]--;
            }
        }
        return true;
    }
}
class  DoRight {
    constructor(){}
    do(box){
        if(check_move(box,1)){
            for (let i=1; i< box.place.length;i+=2) {
                // box.place[i]++;
                box.setplace(i,1);
            }
            // return true;
        }
        return true;
    }
}
class  DoRevolve {
    constructor(){
    }
    do(box){
        var que = new Queue();
        if(check_move(box,0)){
            que.clean();
            let k=0;
            for (let p=0; p< box.order.length;p++) {
                let key = box.order[p];
                let j = key%10;
                let i = (key-j)/10;
                // console.log(i+" "+j);
                if(box.data[i][j]){
                    this.x1 =  -(j-2)+2;
                    this.y1 =  (i-2)+2;
                    this.x2 =  -(j+1-2)+2;
                    this.y2 =  (i+1-2)+2;
                    this.x= Math.min(this.x1,this.x2);
                    this.y= Math.min(this.y1,this.y2);
                    box.data[i][j]=0;
                    que.enqueue(this.x);
                    que.enqueue(this.y);

                    box.order[p]=this.x*10+this.y;
                    // box.place[k] += this.x- i;
                    box.setplace(k,this.x- i)
                    // box.place[k+1] += this.y- j;
                    box.setplace(k+1,this.y-j);
                    k += 2;
                }
            }
            var size = que.size();
            for(let i= 0; i<size;i+=2){
                let x=que.dequeue();
                let y=que.dequeue();
                que.print();
                box.data[x][y]=1;
            }
            // return true;
        }
        return true;
    }
}
class DoDown{
    constructor(){}
    do(box){
        if(check_move(box,2)){
            for (let i=0; i< box.place.length;i+=2) {
                // box.place[i]++;
                box.setplace(i,1)
            }
            return true;
        }
        return false
    }
}
//调用者
class Invoker{
    setLeft(command){
        this.lft = command;
    }
    setRight(command){
        this.rt=command;
    }
    setRevolve(command){
        this.re=command;
    }
    setDown(command){
        this.dn = command;
    }
    doLeft(box){
        return this.lft.do(box);
    }
    doRight(box){
        return this.rt.do(box);
    }
    dorevolve(box) {
        return this.re .do(box);
    }
    doDown(box){
        return this.dn.do(box);
    }
}
//主函数
function  doCommand(box,value) {
    var ft = new Left();
    var rt = new Right();
    var re = new Revolve();
    var dn = new Down();
    var invoker = new Invoker();
    //init
    invoker.setLeft(ft);
    invoker.setRight(rt);
    invoker.setRevolve(re);
    invoker.setDown(dn);

    // var event = window.event || arguments.callee.caller.arguments[0];
    // var target = event.srcElement||event.target;
    // var targetValue = target.value;
    switch (value) {
        case 37://left
            return invoker.doLeft(box);
            break;
        case 39://right
            return invoker.doRight(box);
            break;
        case 38://up revolve
            return invoker.dorevolve(box);
            break;
        case 40:
            return invoker.doDown(box);
            break;
    }

}