
let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    // console.dir(form);
    // let user = this.elements[0];
    // let pass = this.elements[1];
    // // let user= document.querySelector("#name");
    // // let pass = document.querySelector("#pass");
    // console.log(user.value);
    // console.log(pass.value);

    // alert(`Hi ${user.value} your password is set to ${pass.value}`);
  
});
let user = document.querySelector("#name");
user.addEventListener("change",function(){
    console.log("change event");
    console.log("final value ",this.value);
});
user.addEventListener("input",function(){
    console.log("input event");
    console.log("final value ", this.value);
});
