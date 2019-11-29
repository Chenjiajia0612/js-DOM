/**
 * Created by ASUS on 2019/11/25.
 */
window.onload=function(){
    var btn=document.getElementById('btn');
    var test=document.getElementById('test');
    var list=document.getElementById('list');
    btn.onclick=function(){
        if (test.value.trim()==""){   //进行去空字符处理，要是去了空字符之后为空，表示没有输入东西
            var q=47;
            var z=q/26;
            var x=q%26;
            var v=String.fromCharCode(z+96)+String.fromCharCode(x+96);
            console.log(v);
            alert("您还没有输入呦");
            return false;
        }
        var li=document.createElement("li");
        li.innerHTML=test.value;
        if(list.children[0]&&list.children[0].className=="odd"){
            li.className="even";
        }else{
            li.className="odd";
        }
        list.insertBefore(li,list.children[0]);
        test.value="";
        var show=null;
        li.onmouseover=function(){
            if(show){
                show.style.display="block";
            }else{
                show=document.createElement("span");
                show.className="out";
                show.innerHTML="删除";
                show.onclick=function(){
                    list.removeChild(this.parentNode);
                };
                this.appendChild(show);
            }
        };
        li.onmouseout=function(){
            show.style.display="none";
        }
    }
};