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

const utentiJSON = `[
    {"nome": "Alice", "età": 25},
    {"nome": "Bob", "età": 30},
    {"nome": "Giovani", "età": 40}
]`;

const utenti = JSON.parse(utentiJSON);

const nuovoUtente = {nome: "Luca", età: 35};
utenti.push(nuovoUtente);

const utentiAggiornatiJSON = JSON.stringify(utenti, null, 2);

console.log(utentiAggiornatiJSON);
