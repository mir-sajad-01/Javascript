// JSON.parse(data) Method To parse a string data into js object
let jsonRes ='{"fact":"Most cats give birth to a litter of between one and nine kittens. The largest known litter ever produced was 19 kittens, of which 15 survived.","length":142}';
let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);


//  JSON.stringify(json) Method To parse of js object data int json

let student = {
    name :"sajad",
    marks : 95,
}
console.log(JSON.stringify(student));