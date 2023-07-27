const parola = prompt("Inserire una parola :");

let parolaReverse = "";

let uguaglianza = false;

for(let i = parola.length - 1; i >= 0; i--){
    const lettera = parola[i];

    parolaReverse += lettera;   
}
console.log(parolaReverse);

if(parola == parolaReverse){
    uguaglianza = true;
    
}
else{
    uguaglianza = false;
}
console.log(uguaglianza);