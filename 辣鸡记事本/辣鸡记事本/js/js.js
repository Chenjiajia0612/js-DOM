/**
 * Created by ASUS on 2019/11/26.
 */
function out(event){
    if(event.keyCode ==13) {
        show();
    }
    else {
        return false;
    }
}

function show(){
    var text=document.getElementById('text');
    var btn=document.getElementById('btn');
    var big=document.getElementById('big');
    var content=text.value;
    if(text.value.trim()==""){
        alert("您好像忘记输入文字了");
        return false;
    }
    var big1=document.createElement('div');
    big1.className="big1";
    big.appendChild(big1);
    var small1=document.createElement('div');
    small1.className="small1";
    big1.appendChild(small1);
    var small2=document.createElement('div');
    small2.className="small2";
    big1.appendChild(small2);

    var writing=document.createElement('textarea');
    small2.appendChild(writing);
    writing.innerHTML=content;

    var count=document.getElementsByClassName("small1");
    for(var i=0;i<count.length;i++){
        var sum=i+1;
        count[i].innerHTML='node'+sum+'<span><img src="./图片/x.png"></span>'
    }
    writing.value="";

    var dele=document.getElementsByClassName("small1");
    for(var j=0;j<dele.length;j++){
        dele[j].onclick=function(){
            big.removeChild(this.parentNode);
            var order=document.getElementsByClassName("small1");
            for(var k=0;k<order.length;k++){
                var s=k+1;
                order[k].innerHTML='node'+s+'<span><img src="./图片/x.png"></span>'
            }
        }
    }
}