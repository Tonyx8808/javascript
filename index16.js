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

//let nome = "Bob";
//let cognome = "Rossi";
//let età = "35";
//let città = "Napoli";

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

/*function promessaCasuale() {
    return new Promise((resolve, reject) => {
        const successo = Math.random() > 0.5;
        if (successo) {
            resolve("Dati ottenuti con successo!");
        } else {
            reject(new Error("Errore di rete: impossibile recuperare i dati."));
        }
    });
}

// Catena con .then() e .catch()
promessaCasuale()
    .then(
        
        (risultato) => {
            console.log("Successo 1:", risultato);
            return risultato + " → Elaborazione in corso...";
        }
        
    )
    .then((risultatoElaborato) => {
        console.log("Successo 2:", risultatoElaborato);
        return risultatoElaborato + "Completato.";
    })
    .catch((errore) => {
        
        console.error("Errore gestito da .catch():", errore.message);
    })
    .finally(() => {
        console.log(" Operazione terminata (successo o errore).");
    });*/

//GESTIONE IN UNA CATENA DI PROMESSE

// Funzione che restituisce una promessa casuale (risolta o rifiutata)
/*function promessaCasuale(id) {
  return new Promise((resolve, reject) => {
    // Genera un numero casuale tra 0 e 1
    const success = Math.random() > 0.5; // 50% di probabilità di successo

    setTimeout(() => {
      if (success) {
        console.log(`Promessa ${id} risolta con successo!`);
        resolve(`Risultato ${id}`);
      } else {
        console.log(`Promessa ${id} rifiutata!`);
        reject(new Error(`Errore nella promessa ${id}`));
      }
    }, 1000); // Simula un ritardo di 1 secondo
  });
}

// Catena di promesse
promessaCasuale(1)
  .then((risultato1) => {
    console.log("Passo 1 completato:", risultato1);
    return promessaCasuale(2);
  })
  .then((risultato2) => {
    console.log("Passo 2 completato:", risultato2);
    return promessaCasuale(3);
  })
  .then((risultato3) => {
    console.log("Passo 3 completato:", risultato3);
    return "Catena completata con successo!";
  })
  .then((messaggioFinale) => {
    console.log(messaggioFinale);
  })
  .catch((errore) => {
    console.error("🚨 Errore catturato nella catena:", errore.message);
  });*/

//UTILIZZARE PROMISE.ALL

/*function primaFunzione() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve ("Prima funzione si completa in 3 secondi")
        }, 3000);
    })
  }

  function secondaFunzione() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve ("Seconda funzione si completa in 5 secondi")
        }, 5000);
    })
  }

  //utilizzo di Promise.all che mi esegue le due funzioni in modo parallelo

  Promise.all([primaFunzione(), secondaFunzione()])
.then((risultati) => {
    console.log("Entrambe le funzioni sono state risolte!");
    console.log("Risultati", risultati);
})
.catch((errore) => {
    console.error("Una delle promesse è fallita", errore);
});*/

//UTILIZZARE PROMISE.RACE

/*function primaFunzione() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Prima funzione si completa in 3 secondi");
        }, 3000);
    });
}

function secondaFunzione() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Seconda funzione si completa in 5 secondi");
        }, 5000);
    });
}

// Utilizzo di Promise.race

Promise.race([primaFunzione(), secondaFunzione()])
    .then((risultato) => {
        console.log("La prima promessa risolta è:");
        console.log(risultato); // Stampa il valore effettivo della promessa risolta
    })
    .catch((errore) => {
        console.error("Una delle promesse è fallita:", errore);
    });*/

//UTILIZZARE PROMISE.ALLSETTLED

/*function primaFunzione() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Prima funzione si completa in 3 secondi");
    }, 3000);
  });
}

function secondaFunzione() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Seconda funzione si completa in 5 secondi");
    }, 5000);
  });
}

function funzioneFallita() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("La terza funzione è fallita.");
    }, 1500);
  });
}

Promise.allSettled([
  primaFunzione(),
  secondaFunzione(),
  funzioneFallita(),
]).then((risultati) => {
  console.log("Tutte le promesse sono state completate(risolte o rifiutate):");
  risultati.forEach((risultato, indice) => {
    if (risultato.status === "fulfilled") {
      console.log(`Promessa ${indice + 1}: RISOLTA - ${risultato.value}`);
    } else {
        console.log(`Promessa ${indice + 1}: RIFIUTATA- ${risultato.reason}`);
    }
  });
})
.catch((errore) => {
    console.error("Errore imprevisto in allsettled", errore);
});*/

//FUNZIONE ASINCRONA SEMPLICE

//ho creato una funzione asincrona che attende una promessa
/*async function attendiCaricamento() {
    const promise = new Promise ((resolve) => {
        setTimeout (() =>{
            resolve("Il caricamento è avvenuto in 2 secondi!");
        }, 2000);
    })

    //Dopo aver creato una funzione che attende una promessa, in questo punto si attende la risoluzione della promessa
    const messaggio = await promise;

    //con questo console.log stampo il messaggio che il caricamento è avvenuto
    console.log(messaggio);
}

attendiCaricamento(); //con attendiCaricamento vado a richiamare la funzione creata prima con (async function attendiCaricamento)
 SPIEGAZIONE:

 async: dichiaro una funzione asincrona, permettendo l'uso di await;
 await: ferma l'esecuzione della funzione fino a quando la promessa non viene risolta;
 setTimeout: simula un'operazione asincrona che richiede del tempo in questo caso 2 secondi.*/

 //GESTIONE DEGLI ERRORI CON TRY E CATCH

 //creo una funzione asincrona che risolve o rifiuta in base al parametro (Success)

 /*async function attendiCaricamento(success) {

    //creo una promessa con il valore (success)

    const promise = new Promise ((resolve, reject) => {
        setTimeout (() => {
            if (success) {
                resolve ("Il caricamento è avvenuto con successo!");

            }else {
                reject (new Error ("Il caricamento non è avvenuto con successo"));
            }
        }, 1200)
    });
//Attendo la risoluzione della promessa

    try{
const result = await promise;
console.log("SUCCESSO", result);
    //gestione della promessa se viene rifiutata

       } catch (errore) { 
        console.log("ERRORE CATTURATO", errore.message);
    }
 }

 //ESEMPI DI UTILIZZO:

 //promessa true:

 attendiCaricamento(true);

 //promessa false:

 attendiCaricamento(false);*/

//FUNZIONI ASINCRONE IN SERIE

/*async function primaFunzione() {
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve("Risultato della prima funzione")
        }, 2000);
    });
}

async function secondaFunzione() {
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve("Risultato della seconda funzione")
        }, 3000);
    });
}

async function terzaFunzione() {
    console.log("Inzio esecuzioni delle funzioni in serie ...");
    try {
        const risultato1 = await primaFunzione();
        console.log("PRIMO RISULTATO");

        const risultato2 = await secondaFunzione();
        console.log("SECONDO RISULTATO");
        
        console.log("ENTRAMBE LE FUNZIONI SONO STATE RISOLTE");
    }catch (errore){
        console.error("ERRORE DURANTE L'ESECUZIONE", errore);
    }
}
 terzaFunzione();*/

 //ESEGUIRE UNA RICHIESTA GET SEMPLICE

 /*async function fetchData() {
    try{
        console.log("CARICAMENTO DATI IN CORSO ...");
        const response = await fetch ("https://api.restful-api.dev/objects");

        if (!response.ok){
            throw new error(`ERRORE HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log("DATI RICEVUTI", data);
    }catch (errore){
        console.log("ERRORE DURANTE IL CARICAMENTO DATI", errore.message);
    }
 }

 fetchData();*/

 //ESEGUIRE UNA RICHIESTA POST

/*async function creaOggetto() {
    try {
        console.log("Invio della richiesta POST...");

        const datiDaInviare = {
            name: "Smartphone XYZ",
            data: {
                year: 2023,
                price: 699.99,
                color: "Black",
                available: true
            }
        };

        const response = await fetch('https://api.restful-api.dev/objects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datiDaInviare)
        });

        if (!response.ok) {
            throw new Error(`Errore HTTP: ${response.status} - ${response.statusText}`);
        }

        const risultato = await response.json();
        console.log("Oggetto creato con successo:", risultato);
    } catch (errore) {
        console.error("Errore durante la richiesta:", errore.message);
    }
}

// Esegui la funzione
creaOggetto();*/

//GESTIONE DEGLI ERRORI CON ASYNC E AWAIT
/*async function dogImage() {
  const dogUrl = "https://dog.ceo/api/breeds/image/random"; // 🔴 spazi rimossi

  try {
    const response = await fetch(dogUrl); // richiesta API

    if (!response.ok) {
      throw new Error(`Errore HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log("DATI RICEVUTI:", data);
    console.log("IMMAGINE DI UN CANE:", data.message);
  } catch (error) {
    console.error("ERRORE DURANTE IL RECUPERO DELL'IMMAGINE: " + error.message);
  }
}

dogImage();*/

//UTILIZZARE IL LOCALSTORANGE


//console.log("inizio operazioni con localStorange");

//1. Salvo un valore

// localStorage.setItem("NOME", "Alice");
// console.log("SALVATO: nome = Alice");

 //2. Recupero il valore

// const nome = localStorage.getItem("NOME");
// console.log("RECUPERATO =", nome);

 //3. Rimuovere il valore

// localStorage.removeItem("NOME");
// console.log("RIMOSSO: nome");

 //4. Verifica se l'utente è stato rimosso

// const dopoRimozione = localStorage.removeItem("nome");
// console.log("Dopo rimozione: nome", dopoRimozione); // NULL
// console.log("operazioni completate");

//UTILIZZARE IL SESSIONSTORANGE

//console.log("inizio operazioni con sessionStorange");

//1. Salvo un valore

 //sessionStorage.setItem("NOME", "Alice");
//console.log("SALVATO: nome = Alice");

 //2. Recupero il valore

//const nome = sessionStorage.getItem("NOME");
//console.log("RECUPERATO =", nome);

 //3. Rimuovere il valore

//sessionStorage.removeItem("NOME");
//console.log("RIMOSSO: nome");

 //4. Verifica se l'utente è stato rimosso

// const dopoRimozione = sessionStorage.removeItem("nome");
// console.log("Dopo rimozione: nome", dopoRimozione); // NULL
// console.log("operazioni completate");