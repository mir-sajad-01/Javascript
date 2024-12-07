const max = prompt("Enter max No. You want to set ");
const random = Math.floor(Math.random() * max) +1;

let guess = prompt ("Enter you guess no. ");
while(true){
    if(guess == "quit"){
        console.log("You quit the game");
        break;
    }
    if(guess == random){
        console.log ("Your guess is correct !Congrats");
        break;
    }
    else if(guess>random){
        guess = prompt("Your guess is high ")
    }
    else {
       guess = prompt("Your guess is low ");
    }
}