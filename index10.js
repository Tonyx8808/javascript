//ESERCIZIO 42

class Automobile {
  constructor(modello, chilometraggioIniziale) {
    this.modello = modello;
    this._chilometraggio = chilometraggioIniziale;
  }
  get chilometraggio() {
    return this._chilometraggio;
  }
  percorri(km) {
    if (km > 0) {
      this._chilometraggio += km;
    }
  }
}

const miaAuto = new Automobile("Opel corsa", 1500);
console.log(miaAuto.chilometraggio);

miaAuto.percorri(700);
console.log(miaAuto.chilometraggio);
