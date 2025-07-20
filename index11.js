class Automobile {
  constructor(marca, modello) {
    this.marca = marca;
    this.modello = modello;
  }

  descrivi() {
    console.log("Automobile", this.marca, this.modello);
  }
}

class Camion extends Automobile {
  constructor(marca, modello, caricoMassimo) {
    super(marca, modello);
    this.caricoMassimo = caricoMassimo;
    this.caricoAttuale = 0;
  }
  descrivi(){
    console.log(
      "Camion: " + this.marca + " " + this.modello +
      " | Carico massimo: " + this.caricoMassimo + " kg" +
      " | Carico attuale: " + this.caricoAttuale + " kg"
    );
        
    }
    carica(kg){
        if (this.caricoAttuale + kg <= this.caricoMassimo){
            this.caricoAttuale += kg;
            console.log("Caricati" + kg + "caricoAttuale" + this.caricoAttuale + "kg");
        }else{
            console.log("ERRORE: carrico eccessivo il massimo è:" + this.caricoMassimo +"Kg");
        }
    }
  }


const mioCamion = new Camion("Fiat", "Ducato", 4000);
mioCamion.descrivi();
mioCamion.carica(2000);
mioCamion.carica(4000);
mioCamion.descrivi();