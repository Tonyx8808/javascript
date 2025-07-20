//ESERCIZIO 41

class Automobile {
    constructor() {
        this.kmtotali = 0;
        this.contatoreChiamate = 0;
    }
    aggiungiChilometri(km){
        if (typeof km === 'number' && km > 0){
            this.kmtotali += km;
            this.contatoreChiamate++;
        }else {
            console.log('valore non valido per i chilometri');
        }
    }
    mostracontatoreChiamate(){
        return this.contatoreChiamate;
    }
    mostraChilometriTotali() {
        return this.kmtotali;
    }
}
const auto = new Automobile();
auto.aggiungiChilometri(200);
auto.aggiungiChilometri(90);
console.log("Chiamate:", auto.mostracontatoreChiamate()); 
console.log("Km totali:", auto.mostraChilometriTotali());