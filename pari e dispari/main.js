const userNumber = document.getElementById("user-number");
let computerNumber;
const evenButton = document.getElementById("even-button");
const shotsButton = document.getElementById("shots-button");
let sum = 0;

const winLose = document.getElementById("win-lose");
evenButton.addEventListener("click", function () {
    let userNumberInt = parseInt(userNumber.value);
    random();
    console.log(computerNumber);
    sum = userNumberInt + computerNumber;
    console.log(sum);
    
    
    const even = evenShots(sum);
    if(even){
        winLose.innerHTML = "HAI VINTO";
    }
    else{
        winLose.innerHTML = "HAI PERSO";
    }
    
    
})
shotsButton.addEventListener("click", function () {
    let userNumberInt = parseInt(userNumber.value);
    random();
    console.log(computerNumber);
    sum = userNumberInt + computerNumber;
    console.log(sum);
    
    
    const shots = evenShots(sum);
    if(shots){
        winLose.innerHTML = "HAI PERSO";
    }
    else{
        winLose.innerHTML = "HAI VINTO";
    }
    
    
})

















// FUNZIONI

function random() {
    computerNumber = Math.floor(Math.random() * 5) +1;
    document.getElementById("generated-num").innerHTML ="Numero casuale " + computerNumber;
}


function evenShots(sum){
    
    if(sum % 2 == 0){
        return true;          
    }
    
    
     return false;

}
