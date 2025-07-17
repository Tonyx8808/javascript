//ESERCIZO 37

class Automobile {
  constructor(chilometraggio) {
    this.chilometraggio = chilometraggio;
  }
  static confrontachilometraggio(auto1, auto2) {
    if (auto1.chilometraggio > auto2.chilometraggio) {
      return "auto uno deve avere più km";
    } else if (auto1.chilometraggio < auto2.chilometraggio) {
      return "auto due deve avere più km";
    } else {
      return "Entrambe le auto hanno lo stesso chilometraggio";
    }
  }
}
const auto1 = new Automobile(3000);
const auto2 = new Automobile(2000);
console.log(Automobile.confrontachilometraggio(auto1, auto2));
