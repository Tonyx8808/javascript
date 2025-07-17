//ESERCIZO 37

class Automobile {
    #contatoreChiamate = 0;
    constructor(modello) {
        this.modello = modello;
    }
    accendiMotore() {
        this.#contatoreChiamate++;
        console.log(`${this.modello}: Motore acceso.`);
    }
    getNumeroChiamate() {
        return this.#contatoreChiamate;
    }
}

const auto = new Automobile("Opel Corsa");
auto.accendiMotore();
auto.accendiMotore();
console.log(`Il metodo accendiMotore è stato chiamato ${auto.getNumeroChiamate()} volte.`);
