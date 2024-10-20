var i=0;
var j=0;
function daohang(){
    if(i==0)
    {
        i=1;
        dao=document.getElementById("left").innerHTML;
        console.log(dao);
        document.getElementById("left").remove();
        document.getElementById("right").style.width="100%";
    }
    else
    {
        i=0;
        left=document.createElement("div");
        left.setAttribute('id', 'left');
        left.setAttribute("class","color");
        // 这玩意得定义。。。
        left.innerHTML=dao;
        console.log(left.innerHTML);
        var a=document.getElementById("right");
        document.getElementById("part2").insertBefore(left,a);
        document.getElementById("right").style.width="80%";
    }
}
function link0(){
    var c_1=document.getElementById("right_1_2");
    c_1.innerHTML="<a href='dingzhen.html'>芝士丁真</a>";
    var c_2=document.getElementById("right_2_2");
    c_2.innerHTML="<a href='leijun.html'>SU7创死你</a>";
    var c_3=document.getElementById("right_3_2");
    c_3.innerHTML="<a href='vegetabale.html'>菜就多练</a>";
    var c_4=document.getElementById("right_4_2");
    c_4.innerHTML="<a href='鸡.html'>坤坤</a><a href='vegetabale.html'>菜就多练</a>";
}
function link1(){
    var c_1=document.getElementById("right_1_2");
    var c_2=document.getElementById("right_2_2");
    var c_3=document.getElementById("right_3_2");
    var c_4=document.getElementById("right_4_2");
    c_1.innerHTML=c_2.innerHTML=c_3.innerHTML=c_4.innerHTML="<div>学个屁</div>";
}
function link2(){
    var c_1=document.getElementById("right_1_2");
    var c_2=document.getElementById("right_2_2");
    var c_3=document.getElementById("right_3_2");
    var c_4=document.getElementById("right_4_2");
    c_1.innerHTML=c_2.innerHTML=c_3.innerHTML=c_4.innerHTML="<div>一群卷狗</div>";
}
function link3(){
    var c_1=document.getElementById("right_1_2");
    var c_2=document.getElementById("right_2_2");
    var c_3=document.getElementById("right_3_2");
    var c_4=document.getElementById("right_4_2");
    c_1.innerHTML=c_2.innerHTML=c_3.innerHTML=c_4.innerHTML="<div>学生在线，精彩无限</div>";
    // var a_1 = document.createElement("div");
    //var a_2 = document.createTextNode("倒计时");
    //a_1.appendChild(a_2);
    //var element = document.getElementById("c_1");
    //element.appendChild(a_1);
}

function dianzan1(){
    i=1+Number(document.getElementById("dianzan1").innerHTML);
    document.getElementById("dianzan1").innerHTML=i;
    i=0;
}
function pinglun1(){
    var k=Number(document.getElementById("pinglun1").innerText);
    console.log(k);
    k=k+1;
    document.getElementById("pinglun1").innerText=k;
    }

function daojishi(){
    var spans = document.querySelectorAll('span');
    var endTime = new Date('2024-11-1 00:00:00').getTime();
    var newTime = new Date().getTime();
    var diffTime = (endTime - newTime) / 1000;
    var day = parseInt(diffTime / 60 / 60 / 24);
    var honur = parseInt(diffTime / 60 / 60 % 24);
    var min = parseInt(diffTime / 60 % 60);
    var sen = parseInt(diffTime % 60);
    spans[0].innerText = day;
    spans[1].innerText = honur;
    spans[2].innerText = min;
    spans[3].innerText = sen;
}
setInterval(daojishi,1000);

// function changecolor()
// {
//     if(j=0)
//     {
//         j=1;
//         document.getElementsByClassName("hh")[0].setAttribute("class","hhh");
//     }
//     else
//     {
//         j=0;
//         document.getElementsByClassName("hh")[0].classList.remove("hhh");
//     }
// }