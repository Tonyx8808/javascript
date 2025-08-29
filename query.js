// QUERY SELECTOR

// Seleziona il titolo
const titolo = document.querySelector("#Titolo");

// Seleziona il pulsante per cambiare il titolo
const bottone = document.querySelector("#btn");

// Quando si clicca sul bottone, cambia il testo del titolo
bottone.addEventListener("click", function () {
  titolo.textContent = "Titolo cambiato con JS!";
  titolo.style.color = "green";
  titolo.style.transition = "color 0.3s ease";
});

// Seleziona il paragrafo
const paragrafo = document.querySelector("#paragrafo");

// Seleziona il bottone "Cambia"
const btnCambia = document.querySelector("#cambia");

// Unico evento click su btnCambia
btnCambia.addEventListener("click", () => {
  // 1. Mostra il testo attuale del paragrafo (prima di modificarlo)
  alert("Testo attuale: " + paragrafo.innerText);

  // 2. Modifica il contenuto con innerHTML, aggiungendo un bottone
  paragrafo.innerHTML = `
    Questo è un <strong>testo modificato</strong> con un bottone dentro: 
    <button id="btn-interno" style="margin-left: 10px; padding: 5px 10px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
      Cliccami!
    </button>
  `;

  // 3. Cambia lo stile del paragrafo
  paragrafo.style.backgroundColor = "lightblue";
  paragrafo.style.fontSize = "30px";
  paragrafo.style.fontWeight = "bold";
  paragrafo.style.color = "red";
  paragrafo.style.padding = "10px";
  paragrafo.style.borderRadius = "8px";

  // 4. Seleziona il bottone appena creato e aggiungi un evento
  const btnInterno = document.querySelector("#btn-interno");
  if (btnInterno) { // controllo di sicurezza
    btnInterno.addEventListener("click", () => {
      alert("Hai cliccato il bottone dentro il paragrafo!");
    });
  }
});