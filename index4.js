//ESERCIZIO 19

//*const person = {
 //name: "Antonio",
  //age: 37,
  //city: "Napoli",
//};

//person.age = 36; //modificato la proprità age
//console.log(person);

//ESERCIZIO 20

//const persona = {
 // name: "Antonio",
  //age: 37,
  //city: "Napoli",
//};

//persona.job = "developer"; // Aggiunta di una nuova proprietà
//console.log(persona.job);

//ESERCIZIO 21

const person = {
  name: "Antonio",
  age: 37,
  city: "Napoli",
  job: "deloveper",
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

//ESERCIZIO 22

function outerFunction(x) {
  function innerFunction(y) {
    return x + y;
  }
  return innerFunction;
}


//const add5 = outerFunction(5);
//console.log(add5(3));  

//const add10 = outerFunction(10);
//console.log(add10(7)); 

//ESERCIZIO 23

function outerFunction(x, initialValue) {
  let result = initialValue;  

  function innerFunction(y) {
    result = result + y;     
    return result;          
  }

  return innerFunction;
}


const add = outerFunction(5, 10);  

console.log(add(3));  
console.log(add(7));  
console.log(add(1));  

//ESERCIZIO 24

function createCounter() {
  let count = 0; // variabile locale per il conteggio

  return {
    increment: function() {
      count += 1;
      return count;
    },
    decrement: function() {
      count -= 1;
      return count;
    }
  };
}

// Esempio d'uso
const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.decrement()); // 0

//ESERCIZIO 25

const student = {
    name: "Pippo",
    age: 25,
    grade: "A",
    school: "Università"
};

const keys = Object.keys(student); 
console.log(keys);
// Object.keys(student) 
// ( restituisce un array con tutte le proprietà (chiavi) dell’oggetto student.)

//ESERCIZIO 26

const studente = {
    name: "Pippo",
    age: 25,
    grade: "A",
    school: "Università"
};

const values = Object.values(studente); 
console.log(values);



