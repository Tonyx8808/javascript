//Funzione che somma un numero variabile 
function somma (...numeri){
    return numeri.reduce((acc, curr) => acc + curr, 0);
    }

console.log(somma(3, 10, 20));
console.log(somma(7, 5));
console.log(somma(15));
console.log(somma()) 
console.log(somma(3, 18, 20, 19,25, 17, 80));
//destructuring oggetto con rest operator

/*let person ={
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
console.log("altriValori", altriValori);*/