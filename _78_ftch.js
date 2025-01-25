let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data1)=>{
//     console.log("Data1 = " ,data1.fact);
//     return fetch(url)
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("Data2 = ",data2.fact);
// })
// .catch((err)=>{
//     console.log("Error - ",err);
// })
// console.log("I am happy ")
// call work on asynchronous it does not wait for promises

// Use Async and await

async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    }catch(e){
        console.log("error - ", e);
    }
    console.log("Bye");
}
getFacts();