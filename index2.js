//esercizio 3

// 1. Creo una variabile "number" con un valore a scelta
let number = 50;

// 2. Apro un blocco di codice
{
    // 3. Dentro il blocco creo una nuova variabile "number" con valore diverso
    let number = 100;

    // 4. Stampo la variabile "number" all'interno del blocco
    console.log("Dentro il blocco:", number); // Output: 100
}

// 5. Stampo la variabile "number" all'esterno del blocco
console.log("Fuori dal blocco:", number); // Output: 50

//ESERCIZIO 4

// Variabile dichiarata fuori dal blocco
let outside = 30;

{
    // Variabile dichiarata dentro il blocco
    let inside = 70;

    // Stampo entrambe le variabili dentro il blocco
    console.log("Dentro il blocco, outside:", outside); // Output: 30
    console.log("Dentro il blocco, inside:", inside);   // Output: 70
}

// Stampo le variabili fuori dal blocco
console.log("Fuori dal blocco, outside:", outside); // Output: 30

//ESERCIZIO 5

for (let i = 0; i<=20; i += 2){
    console.log(i);
}

//ESERCIZIO 6

let i = 9; //il primo numeri dispari sotto al 10

while (i >=1){
    console.log (i);
    i-=2; //tolgo 2 per passare al primo numero dispari precedente
}

//ESERCIZIO 7 E 8

//let word = prompt('inserisci una parola');
//console.log ('hai inserito', word.length); //INSERISCO .LENGTH

//ESERCIZIO 9

let parola;

//do{

//parola = prompt ('inserisci una parola di almeno 5 caratteri');

//}while (parola.length < 5);
    
//console.log('hai inserito la parola', parola);

//ESERCIZIO 10

let num = 10;
if (num > 5){
    console.log("la variabile è maggiore di 5");
}else{
    console.log("la variabile è minore di 5");
}

//ESERCIZIO 11

//let score = parseInt(prompt("Inserisci il tuo punteggio:"));

//if (score >= 90 && score <= 100) {
    //console.log("voto ottimo");
//} else if (score >= 70 && score <= 89) {
   // console.log("voto buono");
//} else if (score >= 60 && score <= 69) {
    //console.log("voto sufficiente");
//} else if (score <= 59) {
   // console.log("voto insufficiente");
//} else {
   // console.log("Valore non valido");
//50
//}

//ESERCIZIO 12

//let score = parseInt(prompt("Inserisci il tuo punteggio:"));

//switch (true) {
   // case (score >= 90 && score <= 100):
      //  console.log("voto ottimo");
       // break;
    //case (score >= 70 && score <= 89):
        //console.log("voto buono");
       // break;
    //case (score >= 60 && score <= 69):
       // console.log("voto sufficiente");
       // break;
    //case (score <= 59):
      //  console.log("voto insufficiente");
       // break;
   // default:
       // console.log("Valore non valido");
//}

//ESERCIZIO 13

let nu = [10, 20, 30, 40, 50];
console.log(nu);

//ESERCIZIO 14
let numeri = [10, 20, 30, 40, 50];
let somma = 0;

for (let i = 0; i < nu.length; i++) {
    somma += nu[i];
}

console.log("La somma dei numeri è:", somma);

//ESERCIZIO 15

let numer = [10, 20, 30, 40, 50];
let arrayInvertito = [];

for (let i = numer.length - 1; i >= 0; i--) {
    arrayInvertito.push(numer[i]);
}

console.log(arrayInvertito);


//ESERCIZIO 16

let parole = [];

for (let i = 0; i < 5; i++) {
    let parola = prompt("Inserisci una parola:");
    parole.push(parola);
}

for (let i = 0; i < parole.length; i++) {
    if (parole[i].length % 2 !== 0) {
        console.log(parole[i]);
    }
}