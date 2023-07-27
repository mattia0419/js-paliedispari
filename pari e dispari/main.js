const userNumber = document.getElementById("user-number");
let computerNumber;
const evenButton = document.getElementById("even-button");
const shotsButton = document.getElementById("shots-button");
let sum = 0;
let even = false;
const winLose = document.getElementById("win-lose");
evenButton.addEventListener("click", function () {
    let userNumberInt = parseInt(userNumber.value);
    random();
    console.log(computerNumber);
    sum = userNumberInt + computerNumber;
    console.log(sum);
    evenShots(sum, even);
    
    
})

















// FUNZIONI

function random() {
    computerNumber = Math.floor(Math.random() * 5) +1;
    document.getElementById("generated-num").innerHTML ="Numero casuale " + computerNumber;
}

function evenShots(sum, even){
    if(sum % 2 == 0){
        even = true;
        winLose.innerHTML = "HAI VINTO"
    }
    else{
        even = false;
        winLose.innerHTML = "HAI PERSO"
    }
    console.log(even);
} 
