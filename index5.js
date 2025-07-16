//ESERCIZIO 27

const student = {
    name: "Pippo",
    age: 25,
    grade: "A",
    school: "Università"
};

const entries = Object.entries(student);
console.log(entries);

//ESERCIZIO 28

const number = [3, 4, 1, 2];
number.forEach(number => {
    console.log(number * 2);
});

const squaredNumber = number.map(number => number * number);

// Stampo il nuovo array squaredNumbers sulla console
console.log(squaredNumber);

//ESERCIZIO 29

// Creo un array chiamato students con oggetti contenenti name e grade
const students = [
    { name: "Alice", grade: 75 },
    { name: "Bob", grade: 58 },
    { name: "Charlie", grade: 90 },
    { name: "David", grade: 45 }
];

// Uso filter per creare un nuovo array passedStudents con grade >= 60
const passedStudents = students.filter(student => student.grade >= 60);

// Uso find per trovare il primo studente con grade < 60
const firstFailedStudent = students.find(student => student.grade < 60);

// Stampo passedStudents e firstFailedStudent sulla console
console.log("Studenti promossi:", passedStudents);
console.log("Primo studente non promosso:", firstFailedStudent);

//ESERCIZIO 30

// Creo un array chiamato expenses contenente varie spese
const expenses = [120, 85, 40, 200, 55];

// Uso reduce per calcolare la somma totale delle spese
const totalExpenses = expenses.reduce((sum, expense) => sum + expense, 0);

// Creo un array chiamato words con le parole indicate
const words = ["banana", "apple", "cherry", "date"];

// Uso sort per ordinare l'array words in ordine alfabetico
words.sort();

// Stampo la somma totale delle spese
console.log("Somma totale delle spese:", totalExpenses);

// Stampo l'array words ordinato
console.log("Parole ordinate:", words);

//ESERCIZIO DA 31 A 36 con inserimento della proprietà chilomeetraggio

class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }

    descrizione() {
        return `Automobile: ${this.marca} ${this.modello}, anno ${this.anno}`;
    }

    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
        }
    }

    mostraChilometraggio() {
        return `Chilometraggio attuale: ${this.chilometraggio} km`;
    }

    // Metodo privato per calcolare l'età
    #calcolaEtà() {
        const annoCorrente = new Date().getFullYear();
        return annoCorrente - this.anno;
    }

    // Metodo pubblico che usa il metodo privato
    mostraEtà() {
        const età = this.#calcolaEtà();
        return `L'automobile ha ${età} anni.`;
    }

    // Metodo “protetto” per controllare il chilometraggio
    _controllaChilometri() {
        if (this.chilometraggio > 100000) {
            return `Attenzione: chilometraggio elevato (${this.chilometraggio} km)!`;
        }
        return `Chilometraggio nella norma (${this.chilometraggio} km).`;
    }
}

// Aggiungo metodo saluta tramite prototype
Automobile.prototype.saluta = function() {
    return `Ciao! Questa è una ${this.marca} ${this.modello}.`;
};

class Elettrica extends Automobile {
    constructor(marca, modello, anno, chilometraggio = 0, autonomia) {
        super(marca, modello, anno, chilometraggio);
        this.autonomia = autonomia;
    }

    descrizione() {
        return `${super.descrizione()}, autonomia batteria: ${this.autonomia} km`;
    }

    ricarica(km) {
        if (km > 0) {
            this.autonomia += km;
        }
    }

    avvisoChilometraggio() {
        return this._controllaChilometri();
    }
}

// Esempio d’uso
const auto1 = new Automobile("Fiat", "Panda", 2015, 90000);
console.log(auto1.saluta()); // Ciao! Questa è una Fiat Panda.
console.log(auto1.mostraEtà()); // L'automobile ha X anni.
console.log(auto1.mostraChilometraggio()); // Chilometraggio attuale: 90000 km
console.log(auto1._controllaChilometri()); // Chilometraggio nella norma (90000 km).

const tesla = new Elettrica("Tesla", "Model 3", 2019, 120000, 350);
console.log(tesla.saluta()); // Ciao! Questa è una Tesla Model 3.
console.log(tesla.mostraEtà()); // L'automobile ha X anni.
console.log(tesla.descrizione()); // Automobile: Tesla Model 3, anno 2019, autonomia batteria: 350 km
console.log(tesla.avvisoChilometraggio()); // Attenzione: chilometraggio elevato (120000 km)!
tesla.ricarica(50);
console.log(`Autonomia dopo ricarica: ${tesla.autonomia} km`);




