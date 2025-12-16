/*
    FUNZIONE CALCOLO COSTO BIGLIETTO
*/
function calcolaPrezzoBiglietto() {
  // # Raccolta dati

  // Chiedo all'utente il numero di km e converto in numero
  const chilometriDaPercorrere = parseFloat(
    prompt("Inserisci il numero di chilometri da percorrere:")
  );

  // Chiedo all'utente l'età del passeggero e converto in numero intero
  const etaPasseggero = parseInt(prompt("Inserisci l'età del passeggero:"));

  // Costante per il prezzo base al km
  const PrezzoPerKmBase = 0.21;

  // TODO(later): Aggiungere qui la validazione degli input

  // # Elaborazione

  // Calcolo il prezzo base senza sconti
  let prezzoTotaleBase = chilometriDaPercorrere * PrezzoPerKmBase;

  // Applicazione degli sconti
  if (etaPasseggero < 18) {
    // Sconto del 20% per i minorenni
    // Calcolo lo sconto e lo sottraggo dal totale
    const scontoMinor = prezzoTotaleBase * 0.2;
    prezzoTotaleBase -= scontoMinor;
    console.log("Applicato sconto minorenni (20%)");
  } else if (etaPasseggero >= 65) {
    // Sconto del 40% per gli over 65
    // Calcolo lo sconto e lo sottraggo dal totale
    const scontoAnziani = prezzoTotaleBase * 0.4;
    prezzoTotaleBase -= scontoAnziani;
    console.log("Applicato sconto over 65 (40%)");
  }
}
