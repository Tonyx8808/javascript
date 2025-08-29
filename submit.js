//seleziono il form

const form = document.getElementById("mioForm");
const inputNome = document.getElementById("Nome");
const inputCognome = document.getElementById("Cognome");

//gestione dell' evento submit

form.addEventListener("submit", function(evento){
    //impedisci l'invio del form (per ora)
    evento.preventDefault();

    //leggi i valori degli input

    const nome = inputNome.value.trim();
     const Cognome = inputCognome.value.trim();

     //controlla se i campi sono vuoti

     if (nome === "" || Cognome === ""){
        alert("ATTENZIONE: i campi sono vuoti");
     }else{
        //tutti i campi sono compilati: Invia il form
        alert("FORM INVIATO CON SUCCESSO");
        form.submit(); //oppure invia i dati con fetch(), resetta il form, ecc

     }
});