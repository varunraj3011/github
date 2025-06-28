const inout =document.getElementById("input-box");
const listcontainer =document.getElementById("list-cotainner");
function addtask(){
    if(inout.value==0){
    alert("you must write something");}
    else{
        let li =document.createElement("li");
        li.innerHTML=inout.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    };
    inout.value='';
    savedata();
}
listcontainer.addEventListener("click",function(e){
    if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function show(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
show();