class Automobile {
  constructor(modello) {
    this.modello = modello;
  }

  static verificaIstanza(obj, classe) {
    if (obj instanceof classe) {
      return "L'oggetto è un'istanza della classe " + classe.name + ".";
    } else {
      return "L'oggetto NON è un'istanza della classe " + classe.name + ".";
    }
  }
}

class Camion {
  constructor(modello) {
    this.modello = modello;
  }
}

var auto1 = new Automobile("Opel Corsa");
var camion1 = new Camion("Fiat Ducato");

console.log(auto1 instanceof Camion); 
console.log(camion1 instanceof Camion); 

console.log(Automobile.verificaIstanza(auto1, Automobile));  
console.log(Automobile.verificaIstanza(camion1, Camion));    
console.log(Automobile.verificaIstanza(camion1, Automobile)); 
