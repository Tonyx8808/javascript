//ESERCIZIO 40

class Automobile {
    #contatore = 0;
constructor(modello){
    this.modello = modello;
}
    //inserisco per prima cosa la chiamata privata
    #incrementaContatore(km) {
        this.#contatore += km;
    }

    // metodo pubblico per aggiungere km
    aggiungiKm(km) {
        if (km > 0) {
            this.#incrementaContatore(km);
        } else {
            console.log("inserire un valore positivo");
        }
    }

    //visualizzare il contatore
    visualizzaContatore() {
        console.log(`Chilometri totali: ${this.#contatore}`);
    }
}

//utilizzo

const miaAuto = new Automobile ("Opel Corsa");
miaAuto.aggiungiKm(50);
miaAuto.visualizzaContatore();