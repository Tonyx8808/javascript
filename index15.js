/*const number = [30, 10, 1, 20];
const copiaNumber =[...number];

number.push(100);

console.log("Array originale", number);
console.log("Copia array", copiaNumber);*/

//Unione di 2 array 

const number1 = [10, 20, 30, 40];
const number2 = [50, 60, 70, 80];

const number3 = [...number1, ...number2];

console.log(number3);

//Unione di 2 array con metodo contact

/*const number1 = [10, 20, 30, 40];
const number2 = [50, 60, 70, 80];

const number3 = number1.concat(number2);

console.log(number3);
console.log(number1);
console.log(number2);*/

let person = {
 name: "Antonio",
  age: 37,
}

let personCopia = {
    ...person,
    professione: "deloveper"
};

console.log("originale", person);
console.log("copia", personCopia);