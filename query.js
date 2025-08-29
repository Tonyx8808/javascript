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
