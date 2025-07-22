/*let  person = {
 name: "Antonio",
  age: 37,
  city: "Napoli",
};

let {name: personName, age, city} = person

console.log(personName);
console.log(age);
console.log(city);*/

//Destructuring con valori predefiniti

let person = {
   name: "Antonio",
  age: 37,
  city: "Napoli",
}
 let { name: personName, age, city, telefon = 3336547885} = person;
 console.log(personName);
console.log(age);
console.log(city);
console.log(telefon);