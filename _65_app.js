/* Qs1. Create a new input and button element on the page using JavaScript only. Set the
 text of button to “Click me”;*/

let button = document.createElement("button");
let input = document.createElement("input");
button.innerText="click me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

/*Qs2. Add following attributes to the element :- Change placeholder value of input to “username”- Change the id of button to btn */

input.setAttribute("placeholder","username");
button.setAttribute("id","btn");

/* Qs3. Access the btn using the querySelector and button id. Change the button
 background color to blue and text color to white */

let btn = document.querySelector("#btn");
btn.classList.add('btnstyle');

/*  Qs4. Create an h1 element on the page and set its text to “DOM Practice” underlined.
 Change its color to purple. */

 let h = document.createElement("h1");
 h.innerText ="DOM Practice";
document.querySelector("body").append(h);
h.classList.add('h1');

/* Qs5. Create a p tag on the page and set its text to “Apna College Delta Practice”,
 where Delta is bold. */

 let p = document.createElement('p');
 p.innerHTML = "Apna College <b> Delta </b>Practice";
 document.querySelector("body").append(p);
