let msg ="  help! ";
let newstr = msg.trim().toUpperCase();
console.log(newstr);
let name = "ApnaCollege";
console.log(name.slice(4,9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna","Our"));
console.log(name.slice(4).replace("l","t"));

let months=["january","Feb","March","April"];
// make this array =["june","july","March","April"];
console.log(months);
months.shift();
months.shift();
months.unshift("july");
months.unshift("june");
console.log(months);
let colors =["red","white","blue"];
// concatenation
let concatedarr = months.concat(colors);
console.log(concatedarr);
// reverse
let reversearr = months.reverse();
console.log(reversearr);
console.log(months);
// slice

let cars= ["maruti","bmw","audi","rangerover","lamborgini"];
console.log(cars.slice());
console.log(cars.slice(2));
console.log(cars.slice(2,4));
console.log(cars.slice(-2));

console.log(cars.splice(4));
console.log(cars);
console.log(cars.splice(0,1));
console.log(cars);
console.log(cars.splice(0,1,"frox","thar"));
console.log(cars);

let  monthss =["january","july","march","august","sep"];
// change it by splice ->["july","june","march","aug"];
console.log(monthss);
monthss.splice(0,2,"july","june");
console.log(monthss);
// reverse then finding index
console.log(monthss.reverse().indexOf("july"));

// Sort
console.log(monthss);
console.log(monthss.sort());

let nums=[[2,4],[3,6],[4,8]];
console.log(nums[0]);
console.log(nums[0].length);

let tictactoe = [['x'," ",'O'],[" ",'X'," "],['O'," ",'X']];
console.log(tictactoe);

// Questions

// Q1
let array1 = [7,9,0,-2];
console.log(array1.slice(0,3));

// Q2
console.log(array1.slice(array1.length-3,array1.length));

// Q3

let str = "";

if(str.length===0){
    console.log("blank");
}else{
    console.log("not");
}
// Q4 

let str3 = "ApNaCoLlEgE";
let indx = 3;
if(str3[indx] == str3.toLowerCase()){
    console.log("Characcter is lowecase");
}else{
    console.log("Character is Uppercase");
}
// Q5
let array2  = [1,2,3,4];
let element = 5;
if(array2.indexOf(5)=== -1){
    console.log("Not");
}else{
    console.log("Exist");
}

// Loop Questions
//1
let arr5 = [1,2,3,4,2,6];
for(task of arr5){
    console.log(task);
}
for(let i = 0 ;i<arr5.length ;i++){
    if(arr5[i]==2){
        arr5.splice(i,1);
    }
}
for(task of arr5){
    console.log(task);
}
//2

let nummbr = 89284;
let nombr = nummbr;
let k = 0;
let sum = 0 ;
while(nombr>0){ 
    sum += nombr %10;
    nombr=  Math.floor(nombr /10);
    k++;
}
console.log("Total digits in this is" ,k);
console.log("total sum is ",sum);
//4

let factorialdigit = 5;
let factorial = 1;
for(let i = 1 ;i<=factorialdigit;i++){
    factorial *=  i;
} 
console.log(factorial);
//5

