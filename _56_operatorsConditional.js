let a  = 3; 
let b = 4;
console.log ("ans is ",a+b);
// normal
console.log("a is equal to ",a," and b is equal to ",b);
//template literals
console.log(`a is equal to ${a} and b is equal to ${b}`);


// Question 1

let num = 3;
if(num% 10 === 0){
    console.log("good");sa
}else{
    console.log("bad");
}
// Question 2
let name = prompt("Enter your name");
let age = prompt ("Enter your age");
alert(`${name} is ${age} years old`);

//Question 3

let number = 11;
switch(number){
    case(1):
    console.log("january,February,March");
    break;
    case(2):
    console.log("April,May,June");
    break;
    case(3):
    console.log("July,August,September");
    break;
    case(4):
    console.log("October,November,December");
    break;
    default : console.log("exit");
}
let str1 = "golden string";
if(str1.length >5 && str1[0]=='a' || str1[0]=='A'){
    console.log ("golden");
}
else{
    console.log("not");
}


//Question 5
let x = 3;
let y = 5;
let z = 2;
if(x>y &&y>z ){
    console.log("X is greater");
}
else if(y>x && x>z){
    console.log("Y is greater");
}
else{
    console.log("Z is greater");
}
//Question 6
let  a1= 32;
let b1 = 47853;
if(a1 %10 ==b1%10){
    console.log("same");
} 
else{
    console.log("different");
}

