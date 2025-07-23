/*function colcolatore(valore1, valore2, ...altriValori) {
console.log("valore1", valore1)
console.log("valore2", valore2)
console.log("altri valori", altriValori)
}
colcolatore(1,5,8,10);*/

//destructuring array con rest operator

/*let number = [3, 8, 10, 50, 100];

let [valore1, valore2, ...altriValori] = number;

console.log("valore1", valore1);
console.log("valore2", valore2);
console.log("altriValori", altriValori);*/

//destructuring oggetto con rest operator

let person ={
    nome: "Antonio",
    età: 37,
    città: "Napoli",
    telefono: 354798244863,
    email: "example@MediaList.it"
}

let {nome, età, città, ...altriValori} = person;

console.log("nome", nome);
console.log("età", età);
console.log("città", città);
console.log("altriValori", altriValori);