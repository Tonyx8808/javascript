/*function colcolatore(valore1, valore2, ...altriValori) {
console.log("valore1", valore1)
console.log("valore2", valore2)
console.log("altri valori", altriValori)
}
colcolatore(1,5,8,10);*/

//destructuring array con rest operator

let number = [3, 8, 10, 50, 100];

let [valore1, valore2, ...altriValori] = number;

console.log("valore1", valore1);
console.log("valore2", valore2);
console.log("altriValori", altriValori);