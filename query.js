//QUERY SELECTOR

//seleziono l'Id "TITOLO"

const titolo = document.querySelector("#Titolo");

//selezione del pulsante

const bottone = document.querySelector("#btn");

//quando si clicca sul bottone, cambia il testo del titolo

bottone.addEventListener("click", function(){
titolo.textContent = "Titolo cambiato con JS!";
titolo.style.color = "green";
    titolo.style.transition = "color 0.3s ease";
});

const p = document.querySelector("#paragrafo");
const btnLeggi = document.querySelector("#leggi");
const btnCambia = document.querySelector("#cambia");

//testo visibile

btnCambia.addEventListener("click", () => {
    alert(p.innerText); //mostra: "Questo è un testo in grassetto"
});

//Cambia testo

btnCambia.addEventListener("click", () => {
    paragrafo.innerText = "Testo modificato con innerText";
    paragrafo.style.fontWeight = "bold";
    paragrafo.style.color = "red";

    //cambio stile del paragrafo

    paragrafo.style.backgroundColor = "blue"; //sfondo blu
    paragrafo.style.fontSize = "30px"; //testo più grande
});
