function addHistory(score) {
    var history = {
        data: new Date(),
        score: score
    };
    localStorage.setItem(localStorage.length.toString(), JSON.stringify(history));
};

function displayTable() {
    var str = "";
    console.log("display table");
    str += "<table border='solid'>";
    str += "<tr><th>排行</th><th>成绩</th><th>日期</th></tr>";
    for (var i = 0; i < localStorage.length; i++) {
        var score = localStorage.getItem(i.toString());
        var range = i + 1;
        score = JSON.parse(score);
        str += "<tr>";
        str += "<td>" + range + "</td><td>" + score.score + "</td><td>" + score.data + "</td>";
        str += "</tr>"
    }
    str += "</table>";
    document.getElementById('history').innerHTML = str;
}

window.onload = function () {
    //get score
    var loc = location.href;
    var n1 = loc.length;
    var n2 = loc.indexOf("?");
    if (n2 != -1) {
        var para = decodeURI(loc.substr(n2 + 1, n1 - n2));
        var m1 = para.length;//获得每个键值对的长度
        var m2 = para.indexOf("=");//获得每个键值对=号的位置
        var value = para.substr(m2 + 1, m1 - m2);
        addHistory(value);
        location.href = '../h5/history.html';
    }

    //create table
    displayTable();

    //restart game
    var bt_restart = document.getElementById('restart');
    bt_restart.onclick = function () {
        window.location.href = '../h5/index.html';
    };
    var bt_clean = document.getElementById('cleanHistory');
    bt_clean.onclick = function () {
        localStorage.clear();
        location.reload();
    }
};