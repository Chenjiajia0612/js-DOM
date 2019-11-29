/**
 * Created by ASUS on 2019/11/25.
 */
window.onload=function(){
    var test=document.getElementById("test");
    var btn=document.getElementById("btn");
    var add=document.getElementById("add");
    var ul=document.createElement("ul");   //创建一个ul
    add.appendChild(ul);
    btn.onclick=function(){
        var li=document.createElement("li");
        li.innerHTML=test.value+"   <span>删除</span>";
        ul.appendChild(li);
        test.value="";
        var span=document.getElementsByTagName("span");
        for(var i=0;i<span.length;i++){
            span[i].onclick=function(){
                ul.removeChild(this.parentNode);
            }
        }
    };

};