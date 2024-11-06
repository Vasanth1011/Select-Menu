var selectfield=document.getElementById("selectfield");
var selecttext=document.getElementById("selecttext");
var options=document.getElementsByClassName("options");
var content=document.getElementById("content");

for(option of options){
  option.onclick=function(){
    selecttext.innerHTML=option.content;
  }
}