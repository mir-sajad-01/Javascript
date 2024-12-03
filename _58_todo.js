let todo =[];
let request = prompt("Please Enter Your request");
while(true){
    if(request =="quit"){
        console.log("Quitting App");
        break;
     }
     if(request =="list"){
        console.log("---------");
        for(let i = 0 ;i<todo.length ;i++){
            console.log(i,todo[i]);
        }
        console.log("----------");
     } 
     else if(request=="add"){
        let task = prompt("Enter task you want to add");
        todo.push(task);
        console.log("Task Added");
     }
     
     else if(request=="delete"){
        let indx = prompt("Enter index of number");
        todo.splice(indx,1);
        console.log("Deleted Successfully");
     }
     else{
        console.log("Wrong request");
     }
     request =prompt("Please Enter Your request Again");
}
