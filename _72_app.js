let btn = document.createElement("button");
btn.innerText ="Click me";
document.querySelector("body").append(btn);

btn.addEventListener("click",function(event){
    event.target.style.backgroundColor = "green";
});

 // Get references to the input and heading elements
 const nameInput = document.querySelector("#name");
 const displayName = document.querySelector("h2");

 // Event listener for input change
 nameInput.addEventListener("input", function() {
     // Get the value of the input
     let inputValue = nameInput.value;

     // Allow only letters (A-Z, a-z) and spaces using a regular expression
     inputValue = inputValue.replace(/[^a-zA-Z\s]/g, "");  // Replace invalid characters

     // Update the input field and the heading
     nameInput.value = inputValue;  // Update the input value
     displayName.textContent = inputValue;  // Display the sanitized input in the heading
 });