const student = {
    name: "sajad",
    age: 21,
    isem: 8.3,
    iisem:8.29,
    iiisem: 9.47,
    ivsem: 8.54,
    getavg(){
        console.log(this);// object of student class
        let avg = (this.isem + this.iisem + this.iiisem +this.ivsem) / 4;
        console.log(avg);
        console.log(`${this.name} got avg marks = ${avg}`);
    }
};
student.getavg();


function getavgs(){
     console.log(this); // object of window
}
getavgs();

// try catch
 

try{
    console.log(a);
}catch(errr){
    console.log("It is not defined");
    console.log("err");
}

// Arrow function

const sum= (a,b) =>{console.log(a+b)};
sum(3,6);

const cube =(n) =>{return n*n*n};
console.log(cube(4));

const hello =() =>{console.log("hello world")};
hello();

const mul =(a,b) =>(a*b);
console.log(mul(5,6));

// Set Timeout

setTimeout(()=>{
    console.log("Apna College");
}, 4000);

console.log("Welcome to ");

// Set Interval

let id = setInterval (()=>{
    console.log("Apna college");
},2000);
clearInterval(id);


// Questions

// Q1
let average = 0 ;
const arraverage =(arr1)=>{
    for(let num of arr1){
        average+=num;
    }
    return average/(arr1.length);
}
let arr1 = [8,9,3,0,8];
console.log("average of no.s is ",arraverage(arr1));

//Q2

const isEven =(n) => n%2==0;
console.log(isEven(31));

//Q3

