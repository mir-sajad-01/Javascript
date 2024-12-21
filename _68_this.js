// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// })
// let p = document.querySelector("p");
// p.addEventListener("click",function(){
//     console.log(this.innerText);
//     this.style.backgroundColor ="blue";
// })
// let h3 = document.querySelector("h3");
// h3.addEventListener("click",function(){
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// })
// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h3 = document.querySelector("h3");
// function addstyle (){
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// }
// p.addEventListener("click",addstyle);
// btn.addEventListener("click",addstyle);
// h3.addEventListener("click",addstyle);

let inp = document.querySelector("input");
inp.addEventListener("keydown",function(event){
    console.log("code is =" ,event.code);
    if(event.code=="KeyU"){
        console.log("character moves up");
    }else if(event.code =="KeyD")
    {
        console.log("Character moves down");
    }else if(event.code =="KeyR"){
        console.log("character moves right");
    }else if(event.code == "KeyL"){
        console.log("character moves left");
    }
});