function addHistory(score){
    var history = {
        data:new Date(),
        score:score
    };
    localStorage.setItem(localStorage.length.toString(),JSON.stringify(history));
};
window.onload=function () {
    //get score
    var loc = location.href;
    var n1 = loc.length;
    var n2 = loc.indexOf("?");
    var parameter = decodeURI(loc.substr(n2+1, n1-n2));
    var para = parameter.split('&');
    var m1 = para[0].length;//获得每个键值对的长度
    var m2 = para[0].indexOf("=");//获得每个键值对=号的位置
    var value = para[0].substr(m2+1, m1-m2);

    var n1 = para[1].length;//获得每个键值对的长度
    var n2 = para[1].indexOf("=");//获得每个键值对=号的位置
    var value2 = para[1].substr(n2+1, n1-n2);
    if(value2 === "true")addHistory(value);

    //create table
    var str = "";
    console.log("on");
    str += "<table border='solid'>";
    for (var i=0 ; i<localStorage.length; i++){
        if(i===0){
            str += "<tr><th>排行</th><th>成绩</th><th>日期</th></tr>";
        }
            var score = localStorage.getItem(i.toString());
            var range = i+1;
            score=JSON.parse(score);
            str+= "<tr>";
            str += "<td>"+ range +"</td><td>"+score.score+"</td><td>"+score.data+"</td>";
            str+="</tr>"

    }
    str+="</table>";
    document.getElementById('history').innerHTML=str;
    console.log(str);
};