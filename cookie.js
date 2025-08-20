// Funzione per impostare un cookie con scadenza in giorni
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000); // Calcolo corretto dei giorni
  const expires = "expires=" + d.toUTCString(); // Usa la data formattata
  document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`;
  console.log(`Cookie impostato: ${name} = ${value}`);
}

// Funzione per leggere un cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      const decodedValue = decodeURIComponent(value); 
      console.log(`Cookie letto: ${name} = ${decodedValue}`); 
      return decodedValue;
    }
  }
  console.log(`Cookie non trovato: ${name}`);
  return null;
}

// Funzione per rimuovere un cookie
function deleteCookie(name) {
  // Imposta la scadenza a una data nel passato
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  console.log(`Cookie rimosso: ${name}`);
}

// --- ESEMPI DI UTILIZZO ---
console.log("Inizio operazioni sui cookie\n");

// 1. Salva un cookie
setCookie("username", "MarioRossi", 7); // valido per 7 giorni

/* 2. Recupera il valore
getCookie("username");

// 3. Rimuovi il cookie
deleteCookie("username");

// 4. Prova a leggere dopo la rimozione
getCookie("username");

console.log("\nOperazioni completate.");*/

