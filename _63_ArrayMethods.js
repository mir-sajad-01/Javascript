// forEach function
let arr = [1, 2, 3, 4, 5];

function print(elem) {
    console.log(elem);
}
arr.forEach(print);
//using function in for each

arr.forEach(function (elem) {
    console.log(elem);
})
// using arrow
arr.forEach((elem) => {
    console.log(elem);
})

// using object

let students = [{
    name: "sajad",
    marks: 92
},
{
    name: "toufeeq",
    marks: 88
}, {
    name: "Aleem",
    marks: 72
}];

console.log(students);
students.forEach((student)=>{
    console.log(student.marks);
})

// map function

let num = [1,2,3,4];

let newnum = num.map((ele)=>{
    return ele*2;
})
console.log(newnum);

// using upper object

let gpa = students.map((ele)=>{
    return ele.marks/10;
})
console.log(gpa);

// filter function 

let arr2 = [1,2,3,4,5,6,7,8,9,10];

let newarr2 = arr2.filter((ele)=>{
    return ele%2 == 0;
})
console.log(newarr2);

// every function like logical AND

let check = arr2.every((ele)=>(ele%2==0))
let check2 = [1,1,1,1].every((ele)=>(ele%2 != 0))
console.log(check);
console.log(check2);

// some function  like logical OR

let check3 = arr2.some((ele)=>(ele%2==0));
console.log(check3);

// reduce 
let arr3 = [1,2,3,4];
let sum1 = arr3.reduce((acc,elem)=>{
    
    return acc +elem;
});
console.log(sum1);

// find max using reduce fxn

let nums = [2,3,4,7,9,0,1,1,5];
let result = nums.reduce ((max,ele)=>{
    if(ele>max){
        return ele;
    }else{
        return max;
    }
});
console.log(result);

let arr4 = [10,25,30,40];
let chek = arr4.every((ele)=>{
    return ele % 10==0;
});
console.log(chek);

function getmin(arr5){
    let min = arr5.reduce((min,ele)=>{
        if(ele<min){
            return ele;
        }else{
            return min;
        }
    });
    return min;
}
let arr5 = [3,1,9,2];
console.log(getmin(arr5));

// Default parameters
function sum5(a,b=3){
    return a+b;
}
console.log(sum5(3));

// spread 
let arr6 = [1,2,3,4,5];
console.log(...arr6);
console.log(..."apnacollege");

// spread with literals

let arr7 = [1,2,3,4,5];
console.log(...arr7);
let arr8 = [6,8,9];
let newarr9 = [...arr7,...arr8];
console.log(newarr9);

let chars = "hello";
console.log(...chars);

// spread with objects
let data = {
    email : "mirsajad00011@gmail.com",
    password : "abcd"
};
let datacopy = {...data ,id : 133};
console.log(datacopy);

let str3 = {..."hello"};
console.log(str3);

//rest 

function sum4(...args){
   return args.reduce((sum,el)=>sum+el);
}
console.log(sum4(1,2,3,4,5));

function min(msg,...args){
    console.log(msg);
    return args.reduce((min,el)=>{
        if(min>el){
            return el;
        }else {
            return min;
        }
    });
}
console.log(min("min",4,88,23,5));

// Destructing 

let names = ["Tony","bruce","steve","peter"];
/* let winner = names[0];
    let runnerup = names[1];
    let secondrunnerup = names[2];

    To make this shorter we use destructing
*/

let [winnerup,runnerup,...others] = names;
console.log(winnerup);

 // In objects

 const student2 ={
    name : "sajad",
    username :"sajad23",
    password :123,
    city :"jammu"
 }
 const{username : user,password : pass,city:place ="kashmir" } = student2;
 console.log(place);

 // Questions

 // Q1
 let arr1 = [1,2,3,1,2];
 let arr1sumsq = arr1.reduce((sum,el)=>el**2 +sum)/arr1.length;
console.log(arr1sumsq);

// Q2

 let arr1inc = arr1.map((el)=>el+5);
 console.log(arr1inc);

// Q3

let str1 =["sajad","toufeeq","aleem"];
let str1upper =str1.map((el)=>el.toUpperCase());
console.log(str1upper);

// Q4
const doubleAndReturnArgs = (arr,...args)=>[
    ...arr,
    ...args.map((v)=>v*2),
]
console.log(doubleAndReturnArgs([1,2,3],4,4));

// Q5
const mergeObjects =(obj1,obj2)=>(
    {
        ...obj1,...obj2
    }
);
console.log(mergeObjects({a : 1, b : 2},{c : 3,d : 4}))

