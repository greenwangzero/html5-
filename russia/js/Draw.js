const  DownKey = 40;
function draw_work(box) {
    clean(box);
    if (!doCommand(box,DownKey)) return;
    if(!queue.isEmpty()){
        console.log("not empty")
        let command = queue.front();
        if(!doCommand(box,command))return;
        queue.dequeue();
    }
    let cvs = document.getElementById('keybox');
    let cxt = cvs.getContext('2d');

    console.log(box.place);
    for(let i=0;i<box.place.length;i+=2){
        // cxt.strokeStyle = 'gray';
        //  cxt.strokeRect(box.place[i]*size,box.place[i+1]*size,size,size);
        cxt.fillStyle = 'pink';

        if(box.place[i]<0) continue;//防止出框
        let x =box.place[i+1]*size+sy;
        let y =box.place[i]*size+sx;
        cxt.fillRect(x,y,size,size);
    }
}
function clean(box) {
    let cvs = document.getElementById('keybox');
    let cxt = cvs.getContext('2d');
    let size = 10;
    for(let i=0;i<box.place.length;i+=2){
        let x =box.place[i+1]*size+sy;
        let y =box.place[i]*size+sx;
        cxt.clearRect(x,y,size,size);
    }
}
function draw_plate() {
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');
    this.context.strokeStyle = 'black';
    this.context.strokeRect(sx,sy,width,height);
}
function update_plate() {
    let c=document.getElementById("remain");
    let cxt=c.getContext("2d");
    c.height=c.height;
    for(let i=0;i<height/10;i++){
        for (let j=0;j<width/10;j++){
            if(plate.res[i][j]){
                let x = j*size+sx;
                let y = i*size+sy;
                cxt.fillStyle = 'pink';
                cxt.fillRect(x,y,size,size);
            }
        }
    }
}
function update_next(next){
    let c  = document.getElementById("next");
    let cxt = c.getContext("2d");
    c.height = c.height;
    for(let i=0;i<4;i++){
        for (let j=0;j<4;j++){
            if(next.data[i][j]){
                let x = j*size+sx;
                let y = i*size+sy;
                cxt.fillStyle = 'pink';
                cxt.fillRect(x,y,size,size);
            }
        }
    }
}