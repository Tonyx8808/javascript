const number = [30, 10, 1, 20];
const copiaNumber =[...number];

number.push(100);

console.log("Array originale", number);
console.log("Copia array", copiaNumber);