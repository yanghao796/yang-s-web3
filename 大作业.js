var i=0;
var j=0;
function onload()
{
    document.getElementById("left_1").classList.remove("hh");
    document.getElementById("left_1").classList.add("hhh");
    // 初始化，
}
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
    changecolor(0);
}
function link1(){
    var c_1=document.getElementById("right_1_2");
    c_1.innerHTML="<a href='第二次作业.html'>hallo</a>";
    var c_2=document.getElementById("right_2_2");
    var c_3=document.getElementById("right_3_2");
    var c_4=document.getElementById("right_4_2");
    c_2.innerHTML=c_3.innerHTML=c_4.innerHTML="<div>学个屁</div>";
    changecolor(1);
}
function link2(){
    var c_1=document.getElementById("right_1_2");
    c_1.innerHTML="<a href='一408.html'>1408</a>";
    var c_2=document.getElementById("right_2_2");
    var c_3=document.getElementById("right_3_2");
    var c_4=document.getElementById("right_4_2");
    c_2.innerHTML=c_3.innerHTML=c_4.innerHTML="<div>一群卷狗</div>";
    changecolor(2);
}
function link3(){
    var c_1=document.getElementById("right_1_2");
    c_1.innerHTML="<a href='第二次作业.html'>作业2</a>";
    var c_2=document.getElementById("right_2_2");
    var c_3=document.getElementById("right_3_2");
    var c_4=document.getElementById("right_4_2");
    c_2.innerHTML=c_3.innerHTML=c_4.innerHTML="<div>学生在线，精彩无限</div>";
    changecolor(3);
    // var a_1 = document.createElement("div");
    //var a_2 = document.createTextNode("倒计时");
    //a_1.appendChild(a_2);
    //var element = document.getElementById("c_1");
    //element.appendChild(a_1);
}

function    dianzan(a)
{
        i=1+Number(document.getElementsByClassName("c_1")[a].getElementsByTagName("span")[0].innerHTML);
        document.getElementsByClassName("c_1")[a].getElementsByTagName("span")[0].innerHTML=i;
        i=0;
}
function    pinglun(a)
{
        var k=Number(document.getElementsByClassName("c_1")[a].getElementsByTagName("span")[1].innerHTML);
        k=k+1;
        document.getElementsByClassName("c_1")[a].getElementsByTagName("span")[1].innerHTML=k;
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

function changecolor(a)
    {    
        document.getElementsByClassName("hhh")[0].classList.add("hh");
        document.getElementsByClassName("hhh")[0].classList.remove("hhh");
        // 初始化，使得均为hh,
        // 遇到错误就不执行了
        if(a==0)
        {
        document.getElementById("left_1").classList.remove("hh");
        document.getElementById("left_1").classList.add("hhh");
        }
        else if(a==1)
        {
        document.getElementById("left_2").classList.remove("hh");
        document.getElementById("left_2").classList.add("hhh");
        }
        else if(a==2)
        {
        document.getElementById("left_3").classList.remove("hh");
        document.getElementById("left_3").classList.add("hhh");
        }
        else 
        {
        document.getElementById("left_4").classList.remove("hh");
        document.getElementById("left_4").classList.add("hhh");
        }
        // 4种模式
    }
