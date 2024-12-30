let test = document.querySelector("#test");

test.addEventListener("mouseleave",function(event){
    event.target.style.color ="purple";

    setTimeout(()=>{
        event.target.style.color ="";
    },1000);
});

test.addEventListener("mouseout",function(event){
      event.target.style.color="orange";
      setTimeout(()=>{
        event.target.style.color = "";
      },500);
})
// Put the 1000th vertical pixel at the top of the eleme

  
  const log = document.querySelector(".event-log-contents");
  const reload = document.querySelector("#reload");
  
  reload.addEventListener("click", () => {
    log.textContent = "";
    setTimeout(() => {
      window.location.reload(true);
    }, 200);
  });
  
  window.addEventListener("load", (event) => {
    log.textContent += "load\n";
  });
  
  document.addEventListener("readystatechange", (event) => {
    log.textContent += `readystate: ${document.readyState}\n`;
  });
  
  document.addEventListener("DOMContentLoaded", (event) => {
    log.textContent += `DOMContentLoaded\n`;
  });
  
