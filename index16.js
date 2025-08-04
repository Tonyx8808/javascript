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

/*function stampaMessaggio(){
    console.log("sono passati 1 sec");
}

const intervalId = setInterval (stampaMessaggio, 1000);
setTimeout(() => {
clearInterval(intervalId);
console.log("INTERVALLO INTERROTTO OGNI 5 SEC");
}, 5000);*/

//GESTIONE DI UN ERRORE SEMPLICE

/*function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("divisione con zero  non è possibile")
           
        }
        console.log("il risultato della divisione è:", a / b);
    } catch(error) {
        console.error("si è verificato un errore", error.message);
    }
}
divide(10, 2);
divide(10, 0);*/

    //GESTIONE DI PIU' ERRORI

    /*function processString(input) {
        try{
            if( typeof input !== "string") {
                console.error("ERRORE: l'input deve essere una stringa");
                return;
            }
            const result = input.toUpperCase();
            console.log("stringa elaborata", result);

            if(input === "error") {
                console.error("ERRORE: si è verificato un errore durante l'elaborazione");
                return;
            }
        } catch (error) {
            console.error("ERRORE GENERICO", error.message);
        }
    }


processString("HELLO WORD!");
processString(10, 59, 254);    
processString("ERROR");*/

//USO DI FINALLY PER ESEGUIRE CODICE INDIPENDENTEMENTE DAL RISULTATO
/*function processOperation(input) {
    try {
        if (typeof input !== "number") {
            console.error("Errore: l'input deve essere un numero");
            return;
        }
        const result = input * input;
        console.log("Il risultato dell'operazione è:", result);
    } catch (error) {
        console.error("Si è verificato un errore:", error.message);
    } finally {
        console.log("Operazione completata.");
    }
}

processOperation(100);
processOperation("non è un numero");*/

//CALLBACK esempio

/*function funzionePrincipale(valore1, valore2, valore3, callback) {
    callback(valore1, valore2, valore3)
}

funzionePrincipale(10, 25, 56, function(val1, val2, val3) {
    console.log("Valori ricevuti dal callback:", val1, val2, val3);
});*/

//FUNZIONE DI BASE CON CALLBACK

/*function eseguiOperazioni(a, b, c, callback){
    let risultato = a + b + c;
    console.log("IL RISULTATO DELL'OPERAZIONE E':" + risultato);
    callback(); //eseguo il callback
}

//ora devo creare una funzione che mi definisce il mio callback

function mycallback(){
console.log("IL CALLBACK E' STATO ESEGUITO");
}

//ora si deve chiamare la funzione dei numeri e il callback

eseguiOperazioni(13, 25, 49, mycallback);*/

//FUNZIONE CON CALLBACK E PASSAGGIO DI PARAMETRI

//definizione di una funzione che accetta il callback e numeri

/*function operazioneChiamataCallback(num1, num2, num3, callback) {
    let risultato = num1 + num2 + num3;

//chiama il callback con il risultato dell'operazione

callback(risultato);

}

//definisco la funzione di callback

function mycallback(risultato){
    console.log("IL RISULTATO DELL'OPERAZIONE E':", risultato);
}

//ora chiamo la funzione principale inserendo numeri e il callback

operazioneChiamataCallback(15, 68, 21, mycallback);*/

//CALLBACK ANNIDATO

//creo la prima funzione

// Prima funzione che esegue un'operazione e chiama un callback
/*function firstOperation(num1, num2, callback) {
    let result = num1 + num2;
    console.log("Risultato della prima operazione:", result);
    callback(result);
}

// Seconda funzione che funge da callback per la prima funzione
function secondOperation(resultFirstOperation, callback) {
    let finalResult = resultFirstOperation * 2;
    console.log("Risultato della seconda operazione:", finalResult);

    // Chiamare il callback finale, se necessario
    if (callback) {
        callback(finalResult);
    }
}

// Funzione di callback finale
function finalCallback(result) {
    console.log("Tutte le operazioni sono state completate. Risultato finale:", result);
}

// Esecuzione delle operazioni in sequenza
firstOperation(15, 80, function(result) {
    secondOperation(result, finalCallback);
});*/

//CREARE UNA PROMESSA SEMPLICE

/*function createPromise() {
    return new Promise((resolve) => {
        // Simulazione di una operazione asincrona
        setTimeout(() => {
            resolve("Promessa risolta!");
        }, 2000);
    });
}
createPromise().then((message) =>{
    console.log(message);
});*/

//GESTIONE DI UNA PROMESSA CON CATCH

/*function createPromise() {
    return new Promise((resolve, reject) => {
        // Simulazione di una operazione asincrona
        setTimeout(() => {
            const shouldReject = true; // Cambia questo valore a false per vedere la Promise risolta

            if (shouldReject) {
                reject(new Error("Qualcosa è andato storto!"));
            } else {
                resolve("Promessa risolta!");
            }
        }, 2000);
    });
}

createPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error("Errore catturato:", error.message);
    });*/

    //CRERE UNA PROMESSA CON FINALLY

// Funzione che simula la cottura di una pizza
/*function cuociPizza() {
    return new Promise((resolve, reject) => {
        // Simulazione del tempo di cottura
        setTimeout(() => {
            const pizzaCotta = true; // Cambia questo valore per simulare un successo o un fallimento

            if (pizzaCotta) {
                resolve("La pizza è pronta!");
            } else {
                reject(new Error("La pizza si è bruciata."));
            }
        }, 1000); // Simula un ritardo di 1 secondo
    });
}

// Utilizzo della Promise
cuociPizza()
    .then((messaggio) => {
        console.log(messaggio); // Questo verrà eseguito se la pizza è cotta con successo
    })
    .catch((errore) => {
        console.error(errore.message); // Questo verrà eseguito se la pizza si brucia
    })
    .finally(() => {
        console.log("Operazione di cottura completata."); // Questo verrà eseguito in entrambi i casi
    });*/

    //CATENA DI PROMESSE SEMPLICI

//funzione che di preparazione agli ingredienti

    /*function preparaIngredienti() {
        return new Promise ((resolve) => {
            setTimeout(() => {
                console.log("INGREDIENTI PREPARATI.");
                resolve();
            }, 1000);
        })
    }

    //funzione cottura della pizza

    function cotturaPizza() {
        return new Promise ((resolve) => {
            setTimeout(() => {
                console.log("PIZZA COTTA");
                resolve();
            }, 3000);
        })
    }

    //funzione del servizio della pizza

    function pizzaServita() {
        return new Promise ((resolve) => {
            setTimeout(() => {
                console.log("PIZZA SERVITA");
                resolve();
            }, 2000);
        })
    }
    //incatenazione delle promesse
preparaIngredienti()
.then(() => cotturaPizza())
.then(() => pizzaServita())
.then(() => {
    console.log("TUTTE LE PIZZE SONO STATE COMPLETATE!");
})
.catch((errore) => {
    console.error("LE PIZZE SONO BRUCIATE", errore);
});*/

//CATENA DI PROMESSE CON GESTIONI DI ERRORI


/*function getRandomPromise() {
  return new Promise((resolve, reject) => {
    
    const randomValue = Math.random();

    
    if (randomValue > 0.5) {
      resolve(randomValue);
    } else {
      reject(new Error("Il valore è troppo basso"));
    }
  });
}


getRandomPromise()
  .then((result) => {
    console.log("Promessa risolta con valore:", result);
   
    return result * 10;
  })
  .then((newResult) => {
    console.log("Nuovo risultato dopo la moltiplicazione:", newResult);
    
    return newResult + 5;
  })
  .then((finalResult) => {
    console.log("Risultato finale:", finalResult);
  })
  .catch((error) => {
    console.error("Errore:", error.message);
  });*/

  //GESTIONE DEGLI ERRORI CON CATCH

    /*function rejectPromise(){
        return new Promise((resolve, reject) =>{
            reject(new Error("SI E' VERIFICATO UN ERRORE DURANTE L'ELABORAZIONE!"));
        })
    }

    rejectPromise()
    .catch((errore) =>{
        console.error("Errore gestito", errore.message);
    });*/

    //GESTIONE DEGLI ERRORI CON THEN E CATCH

   function promessaCasuale() {
    return new Promise((resolve, reject) => {
        const successo = Math.random() > 0.5;
        if (successo) {
            resolve("✅ Dati ottenuti con successo!");
        } else {
            reject(new Error("❌ Errore di rete: impossibile recuperare i dati."));
        }
    });
}

// Catena con .then() e .catch()
promessaCasuale()
    .then(
        // Primo .then: gestisce il successo
        (risultato) => {
            console.log("Successo 1:", risultato);
            return risultato + " → Elaborazione in corso...";
        }
        // Opzionale: secondo argomento di .then() per gestire errore locale
        // (raro, meglio usare .catch())
    )
    .then((risultatoElaborato) => {
        console.log("Successo 2:", risultatoElaborato);
        return risultatoElaborato + " ✅ Completato.";
    })
    .catch((errore) => {
        // Gestisce TUTTI gli errori non gestiti nei .then() precedenti
        console.error("Errore gestito da .catch():", errore.message);
    })
    .finally(() => {
        console.log("⏹️  Operazione terminata (successo o errore).");
    });