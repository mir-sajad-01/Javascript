let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
      let item = document.createElement("li");
    item.innerText = input.value;

    let dlt= document.createElement("button");
    dlt.classList.add("btn2");
    dlt.innerText = "Delete";
  
    item.appendChild(dlt);
    ul.appendChild(item);  
    input.value =""; 


    //  dlt.addEventListener("click",function(){
    //     let par = this.parentElement;
    //     par.remove();
    // });
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName =="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("delted");
    }else{
        console.log(event.target.nodeName);
    }
})

      