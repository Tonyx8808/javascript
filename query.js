// QUERY SELECTOR

// Seleziona il titolo
const titolo = document.querySelector("#Titolo");
const bottone = document.querySelector("#btn");

bottone.addEventListener("click", function () {
  titolo.textContent = "Titolo cambiato con JS!";
  titolo.style.color = "green";
  titolo.style.transition = "color 0.3s ease";
});

// Seleziona il paragrafo
const paragrafo = document.querySelector("#paragrafo");
const btnCambia = document.querySelector("#cambia");

btnCambia.addEventListener("click", () => {
  alert("Testo attuale: " + paragrafo.innerText);

  paragrafo.innerHTML = `
    Questo è un <strong>testo modificato</strong> con un bottone dentro: 
    <button id="btn-interno" style="margin-left: 10px; padding: 5px 10px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
      Cliccami!
    </button>
  `;

  paragrafo.style.backgroundColor = "lightblue";
  paragrafo.style.fontSize = "30px";
  paragrafo.style.fontWeight = "bold";
  paragrafo.style.color = "red";
  paragrafo.style.padding = "10px";
  paragrafo.style.borderRadius = "8px";

  const btnInterno = document.querySelector("#btn-interno");
  if (btnInterno) {
    btnInterno.addEventListener("click", () => {
      alert("Hai cliccato il bottone dentro il paragrafo!");
    });
  }
});

// ✅ Esegui solo quando la pagina è pronta
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("lista-container");

  if (container) {
    const ul = document.createElement("ul");
    const elementi = ["Uno", "Due", "Tre", "Quattro", "Cinque"];

    elementi.forEach(function (item) {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });

    container.appendChild(ul);
  } else {
    console.warn("Elemento #lista-container non trovato nel DOM.");
  }
});