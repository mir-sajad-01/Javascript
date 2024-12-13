let buttons = document.querySelectorAll("button");
for (btn of buttons) {
    // button.onclick = function () {
    //     console.log("hello mr");
    // };
    // button.onmouseenter = function () {
    //     console.log("please press");
    // }
    btn.addEventListener("click", function () {
        console.log("button clicked");
    });
    btn.addEventListener("click", function () {
        console.log("clicked again");
    })
}

let p = document.querySelector("p");
p.addEventListener("click",function(){
    console.log("you clicked para")
})
let div = document.querySelector("div");
div.addEventListener("mouseenter",function(){
    console.log("mouse inside");
})
