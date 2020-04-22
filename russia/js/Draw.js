const  downkey = 40;
function draw_work(box) {
    clean(box);
    if (!doCommand(box,downkey)) return;
    if(!queue.isEmpty()){
        console.log("not empty")
        var command = queue.front();
        if(!doCommand(box,command))return;
        queue.dequeue();
    }
    var cvs = document.getElementById('keybox');
    var cxt = cvs.getContext('2d');

    console.log(box.place);
    for(let i=0;i<box.place.length;i+=2){
        // cxt.strokeStyle = 'gray';
        //  cxt.strokeRect(box.place[i]*size,box.place[i+1]*size,size,size);
        cxt.fillStyle = 'pink';

        var x =box.place[i+1]*size+sy;
        var y =box.place[i]*size+sx;
        cxt.fillRect(x,y,size,size);
    }
}
function clean(box) {
    var cvs = document.getElementById('keybox');
    var cxt = cvs.getContext('2d');
    var size = 10;
    for(let i=0;i<box.place.length;i+=2){
        var x =box.place[i+1]*size+sy;
        var y =box.place[i]*size+sx;
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
    var c=document.getElementById("remain");
    var cxt=c.getContext("2d");
    c.height=c.height;
    for(let i=0;i<height/10;i++){
        for (let j=0;j<width/10;j++){
            if(plate.res[i][j]){
                var x = j*size+sx;
                var y = i*size+sy;
                cxt.fillStyle = 'pink';
                cxt.fillRect(x,y,size,size);
            }
        }
    }
}