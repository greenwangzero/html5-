function  getplace (box) {
    //console.log(box);
    let n=0;
    for (let i=0;i<box.data.length;i++){
        for (let j=0;j<box.data.length;j++) {
            if(box.data[i][j]){
                //初始化方块位置
                box.place[n++]+=i-2; //从-2开始显示
                box.place[n]+=width/30;
                box.place[n++]+=j;
                box.order.push( i*10+j );
            }
        }
    }
}
// function initplace(place) {
//     for (let i=0;i<place.length;i+=2){
//         place[i]+=sx/10;
//         place[i+1]+=sy/10;
//     }
// }
// function checkPlate(box) {//检查box与plate是否相碰
//     for(let i=0;i<box.place.length;i+=2){
//         var x = box.place[i];
//         var y = box.place[i+1]!= 0 ? box.place[i+1]: 0;
//         if(plate.res[y][x])return true
//     }
//     return false;
// }
class Box {
    constructor() {
        this.renew = true;
        this.type = 0;
        this.data = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        //记录每个方块的绝对位置(x,y)
        this.place = [0,0,0,0,0,0,0,0];
        // initplace(this.place);
        this.order = [];
    }
    notify(){
        plate.update(this);
    }
    setplace(i,key) {
        this.place[i]+=key;
    }
}
class  Box_1 extends Box{
    constructor(){
        super();
        this.data = [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        getplace(this);
    }
}
class  Box_2 extends Box{
    constructor(){
        super();
        this.data = [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ];getplace(this);
    }
}
class  Box_3 extends Box{
    constructor(){
        super();
        this.data = [
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ];getplace(this);
    }
}
class  Box_4 extends Box{
    constructor(){
        super();
        this.data = [
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ];getplace(this);
    }
}
class  Box_5 extends Box{
    constructor(){
        super();
        this.data = [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0]
        ];getplace(this);
    }
}
class  Box_6 extends Box{
    constructor(){
        super();
        this.data = [
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 1],
            [0, 0, 0, 0]
        ];getplace(this);
    }
}
class  Box_0 extends Box{
    constructor(){
        super();
        this.data = [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 1, 1, 1],
            [0, 0, 0, 0]
        ];getplace(this);
    }
}
class BoxFactory{
    constructor(){}
    getBoxInstance(){
        this.type = parseInt(Math.random()*7);
        //this.type = 1;
        let ans ;
        switch (this.type) {
            case 0:
                ans = new Box_0();
                break;
            case 1:
                ans= new Box_1();
                break;
            case 2:
                ans= new Box_2();
                break;
            case 3:
                ans= new Box_3();
                break;
            case 4:
                ans= new Box_4();
                break;
            case  5:
                ans= new Box_5();
                break;
            case 6:
                ans= new Box_6();
                break;
            default:
                ans = new Box_1();
        }
        // this.Boxtype = 'Box_' + this.type ;
        // console.log('box_'+this.type);
        // var ans = new Box_0;
        // //var ans = new $(this.Boxtype);
        console.log(this.type);
        return ans;
    }
}