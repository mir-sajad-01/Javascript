const url = "https://icanhazdadjoke.com/";

async function getJokes(){
    try{
        const config = {headers:{Accept: "application/json"}}
        let res = await axios.get(url,config);
        console.log(res.data);
    }catch(res){
        console.log(err);
    }
}
getJokes();
