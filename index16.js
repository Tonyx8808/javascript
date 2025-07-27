/*Funzione che somma un numero variabile 
function somma (...numeri){
    return numeri.reduce((acc, curr) => acc + curr, 0);
    }

console.log(somma(3, 10, 20));
console.log(somma(7, 5));
console.log(somma(15));
console.log(somma()) 
console.log(somma(3, 18, 20, 19,25, 17, 80));
//destructuring oggetto con rest operator

/*let person ={
    nome: "Antonio",
    età: 37,
    città: "Napoli",
    telefono: 354798244863,
    email: "example@MediaList.it"
}

let {nome, età, città, ...altriValori} = person;

console.log("nome", nome);
console.log("età", età);
console.log("città", città);
console.log("altriValori", altriValori);*/

//CONVERSIONE DI UN OGGETTO IN UNA STRINGA JSON

/*const utente = {
    nome:"Alice",
    cognome:"Rossi",
    età:25,
    telefono:3245866694,
    email:"example@mail.it",
    attiva: true
};

const json = JSON.stringify(utente);
console.log(json);*/

//CONVERSIONE DI UNA STRINGA JSON IN UN OGGETTO

/*const jsonString = '{"nome":"Alice","cognome":"Rossi","età":25,"telefono":3245866694,"email":"example@mail.it","attiva":true}';
const ogetto = JSON.parse(jsonString);
console.log(ogetto.nome);
console.log(ogetto.cognome);
console.log(ogetto.età);
console.log(ogetto.telefono);
console.log(ogetto.email);
console.log(ogetto.attivac);*/

//MANIPOLAZIONE DI DATI JSON

/*const utentiJSON = `[
    {"nome": "Alice", "età": 25},
    {"nome": "Bob", "età": 30},
    {"nome": "Giovani", "età": 40}
]`;

const utenti = JSON.parse(utentiJSON);

const nuovoUtente = {nome: "Luca", età: 35};
utenti.push(nuovoUtente);

const utentiAggiornatiJSON = JSON.stringify(utenti, null, 2);

console.log(utentiAggiornatiJSON);*/

//STRINGA SEMPLICE CON TEMPLATE LITERALS

/*let nome = "Alice";
let cognome = "Rossi";
let testo = "Hello word !";
let testo2 = `Hello ${nome} ${cognome}!`;
console.log(testo2);*/

//STRINGA MULTILINEA CON TEMPLATE LITERALS

let nome = "Bob";
let cognome = "Rossi";
let età = "35";
let città = "Napoli";

// Creazione della stringa multilinea con template literals

/*let descrizione = `informazioni personali:
nome: ${nome}
cognome:${cognome}
età:${età} anni
città:${città}
`
console.log(descrizione);*/

//FUNZIONE E TEMPLATE LITERALS

/*function formattaPersona(persona){
    return `Nome: ${persona.nome}, Cognome: ${persona.cognome}, Età: ${persona.età}`;
}

const personaEsempio = {
    nome: "Alice",
    cognome: "Rossi",
    età: "29"
}
const risultato = formattaPersona(personaEsempio);
console.log(risultato);*/

//UTILIZZARE IL CONSOLE.LOG

/*const numero = 1;
const stringa = "HELLO WORD!";
const ogetto = {
    nome: "Bob",
    cognome: "Rossi",
    età: 30,
    città: "Napoli"
}
const array = ["Alice", "Bob", 30];
console.log(numero);
console.log(stringa);
console.log(ogetto);
console.log(array);*/

//CONSOLE.ERROR & CONSOLE.WARN

/*let miaVariabile = 2;

if (miaVariabile === 5) {
    console.error("ERRORE: la variabile ha il valore 5");
} else if (miaVariabile === 2) {
    console.warn("ATTENZIONE: la variabile ha il valore 2");
} else {
    console.log("INFORMAZIONE: la variabile ha un valore diverso da 2 e 5");
}*/

//CONSOLE.TABLE & CONSOLE.GROUP

/*const persone = [
{nome:"Alice", cognome: "Rossi", età:"25"},
{nome:"Bob", cognome: "Verdi", età:"39"},
{nome:"Pippo", cognome: "Pallino", età:"18"}    
]
console.group("INFORMAZIONI SULLE PERSONE");

console.table(persone);
console.log("MESSAGGIO DEL GRUPPO");
console.log("NUMERO DI PERSONE", persone.length);

console.groupEnd();

console.log("MESSAGGIO FUORI DAL GRUPPO");*/

//SET TIMEOUT

/*setTimeout(() => {
    console.log("QUESTO MESSAGGIO VIENE VISUALIZZATO OGNI 3 SECONDI");
}, 3000);

//SETINTERVAL

setInterval(() => {
console.log("QUESTO MESSAGGIO VIENE VISUALIZZATO OGNI 2 SECONDI");
}, 2000);*/

//INTERRUZIONE DI SET INTERVAL

function stampaMessaggio(){
    console.log("sono passati 1 sec");
}

const intervalId = setInterval (stampaMessaggio, 1000);
setTimeout(() => {
clearInterval(intervalId);
console.log("INTERVALLO INTERROTTO OGNI 5 SEC");
}, 5000);