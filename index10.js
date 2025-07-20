//ESERCIZIO 42

class Automobile {
  constructor(modello, chilometraggioIniziale) {
    this.modello = modello;
    this._chilometraggio = chilometraggioIniziale;
  }
  get chilometraggio() {
    return this._chilometraggio;
  }

  set chilometraggio(nuovoChilometraggio){
    if (nuovoChilometraggio >= this._chilometraggio){
        this._chilometraggio = nuovoChilometraggio;
    }else{
        console.log("ERRORE: impossibile diminuire il chilometraggio");
    }
  }
  percorri(km) {
    if (km > 0) {
      this._chilometraggio += km;
    }
  }
}

const miaAuto = new Automobile("Opel corsa", 1500);
console.log(miaAuto.chilometraggio);

miaAuto.chilometraggio = 4000;
console.log(miaAuto.chilometraggio);

miaAuto.chilometraggio = 200;
console.log(miaAuto.chilometraggio); 
