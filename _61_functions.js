function hello() {
    console.log("hello");
}
hello();
function print(name, age) {
    console.log(`${name} is ${age} years old `);
}
print("sajad", 21);
function forreturn(marks1, marks2) {
    return marks1 + marks2;
}
console.log(forreturn(33, 55));
const variable = function (arg1, arg2) {
    return arg1 + arg2;
}
let sum = variable(3, 5);
console.log(sum);

function multiplegreet(func, n) {
    for (let i = 0; i < n; i++) {
        func();
    }
}
function func() {
    console.log("greet");
}
multiplegreet(func, 3);

// let request = prompt("Enter your request ");
// let n = prompt ("Enter your number");
// console.log(oddoreven(request));
// function oddoreven(request){
//     if(request=="odd"){
//         return function(n){
//             console.log(n%2!=0);
//         }
//     }
//     else if(request=="even"){
//         return function(n){
//             console.log(n%2==0);
//         }
//     }
//     else{
//         console.log("Wrong request");
//     }
// }

//Methods

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    mul: function (a, b) {
        return a * b;
    },
    sub: function (a, b) {
        return a - b;
    }
};

console.log(calculator.mul(3, 4));


//Questions

let numb = 8;
let k = 0;
let arr = [8, 2, 0, 1, 9, 10];
function largenumb(arr, numb) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > numb) {
            newarr.push(arr[i]);
            k++;
        }
    }
    return newarr;
}

console.log(largenumb(arr, numb));

//2

let str = "abcdabcdefgggh";
function uniquechar(str) {
    let newstr ="";
    for (let i = 0; i < str.length; i++) {
        if (!newstr.includes(str[i])) {
            newstr += str[i];
        }

    }
    return newstr;
}

console.log(uniquechar(str));


//3
let country = ["Australia","Germany","United states of America"];
let max = 0;
let idx ;
function largestCountryname(country){
    for(let i = 0 ;i<country.length ;i++){
        let lengthofele = country[i].length ;
        if(lengthofele>max){
            max = lengthofele;
            idx = i;
        }
    }
    return idx;
}
console.log(country[largestCountryname(country)]);


//5


let start = Math.floor(Math.random()*10)+5;
let end = Math.floor(Math.random()*10)+15;

function generaterandom(){
    
}
