/*let number = [1, 2, 3, 4];

let [Primo, Secondo] = number;

console.log("Primo numero", Primo);
console.log("Secondo numero", Secondo);*/

//saltare gli elementi durante il destrutturing

/*let Number = [1, 2, 3, 4];

let [primo, ,terzo] = Number;

console.log("primo numero", primo);
console.log("terzo numero", terzo);*/

//destructuring con valori predefiniti

let num = [1,2,3];

let [a = 0, b = 0, c = 0, d = 0, e = 0] = num

console.log("a:", a); 
console.log("b:", b); 
console.log("c:", c); 
console.log("d:", d); 
console.log("e:", e);