h1 = document.querySelector("h1");

// IST METHOD

// setTimeout(()=>{
//     h1.style.color = "red";
// },1000);

// setTimeout(()=>{
//     h1.style.color = "orange";
// },2000);

// setTimeout(()=>{
//     h1.style.color = "green";
// });

// SECOND METHOD

// function changeColor(color,delay){
//     setTimeout(()=>{
//         h1.style.color  = color;
//     },delay);
// }

// changeColor("red",1000);
// changeColor("orange",2000);
// changeColor("green",3000);

// THIRD METHOD (CallBack Hell) Nesting

// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     },delay);
// }

// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("black",1000,()=>{
//             changeColor("pink",1000,()=>{
//                 changeColor("blue",1000);
//             });
//         });
//     });
// });

// With out Promises
// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }
// savetoDb("sajad", () => {
//     console.log("success : your data was saved");
//     savetoDb("toufeeq", () => {
//         console.log("success2 : your data is saved");
//         savetoDb("Aleem", () => {
//             console.log("success3: Your data is saved")
//         }, () => {
//             console.log("failure3 : weak connection data not saved")
//         });
//     }, () => {
//         console.log("failur2 :weak connection data not saved");
//     });
// }, () => {
//     console.log("failure: weak connection data not saved");
// });

// Promises

// function savetoDb(data) {
//     return new Promise((resolve,reject)=>{
//      let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         resolve("success : data was saved");
//     } else {
//         reject("failure : weak Connection ");
//     }
//     });
// }
// // let request = savetoDb("sajad");// requres = promise object
// // request
// //  .then(()=>{
// //     console.log("promise was resolved");
// //     console.log(request);
// //  })
// //  .catch(()=>{
// //     console.log("promise was rejected");
// //     console.log(request);
// //  });
// // we can write it like this

// savetoDb("sajad")
//  .then((result)=>{
//     console.log("data1 saved");
//     // savetoDb("toufeeq").then(()=>{
//     //     console.log("data2 saved");
//     // }); // or
//     return savetoDb("toufeeq"); 
//  })
//  .then(()=>{
//     console.log("data2 saved");
//     return savetoDb("aleed");
//  })
//  .then(()=>{
//     console.log("data3 saved");
//  })
//  .catch(()=>{
//     console.log("promise was rejected");
//  });


// Promise method for ist ans Color 

// function changeColor(color,delay){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//         h1.style.color = color;
//         resolve("color changed");
//     },delay);
//     });
// }
// changeColor("red",1000)
// .then(()=>{
//     console.log("red color was completed");
//     return changeColor("orange",1000);
// })
// .then(()=>{
//     console.log("orange color was completed");
//     return changeColor("pink",1000);
// })
// .then(()=>{
//     console.log("pink color was completed");
//     return changeColor("blue",1000);
// })
// .then(()=>{
//     console.log("blue was completed");
// })

//    Async Keyword

// async function greet(){
//     throw "404 page not found";
//     return "hello";
// }

// greet()
// .then((result)=>{
//     console.log("Promise was resolved");
//     console.log("result was : ",result);
// })
// .catch((err)=>{
//     console.log("promise was rejected with err :",err);
// });
// // using arrow function
// let demo =async() =>{
//     return 5;
// }
// console.log(demo());

// Await Keyword

// function getnum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }
// async function demo(){
//     await getnum();
//     await getnum();
//     await getnum();
// }
// demo();

//  Using await in Color problem

function changeColor(color,delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        let num = Math.floor(Math.random()*5)+1;
        if(num>3){
            reject("promise rejected");
        }
        h1.style.color = color;
        console.log(`color changed to ${color}!`)
        resolve("color changed");
    },delay);
    });
}
async function demo(){
    try{
        await changeColor("green",1000);
    await changeColor("red",1000);
    await changeColor("pink",1000);
    await changeColor("blue",1000);
    }catch(err){
        console.log("error caught");
        console.log(err);
    }
    let a = 5;
    console.log(a);
}  
demo();
