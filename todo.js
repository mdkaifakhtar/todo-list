let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function (){
    let item=document.createElement("li");  
    item.innerText=inp.value;

    let dbtn=document.createElement("button");
    dbtn.innerText="Delete";
    dbtn.className="delete";
    item.appendChild(dbtn);
    dbtn.style.backgroundColor="white";
    
    ul.appendChild(item); 
    inp.value="";
});

ul.addEventListener("click",function (event){
    if(event.target.nodeName=="BUTTON"){
        let ditem=event.target.parentElement;
        ditem.remove();
    }
});

 