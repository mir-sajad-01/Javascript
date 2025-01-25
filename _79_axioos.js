let url = "https://catfact.ninja/fact";

  // Use await and axios

// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         console.log(res.data.fact);
//     }catch(e){
//         console.log("error - ", e);
//     }
// }
// getFacts();

 // Html use

 let btn = document.querySelector("button");
 btn.addEventListener(("click"),async ()=>{
     let fact  =  await getFacts();
     let  p = document.querySelector("#result");
     p.innerText = fact;
 })
 async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log("error - ", e);
        return "ERROR Fact NOT FOUND";
    }
}

let url2 = "https://dog.ceo/api/breeds/image/random"