/*
    FUNZIONE CALCOLO COSTO BIGLIETTO
*/
function calcolaPrezzoBiglietto() {
  // MOdifica della raccolta dati per verificari gli imput
  const prezzoPerKmBase = 0.21;
  let chilometriDaPercorrere;
  let etaPasseggero;
  console.log(prezzoPerKmBase);

  // Validare gli imput dell'utente
  do {
    chilometriDaPercorrere = parseFloat(
      prompt("Inserisci il numero di chilometri da percorrere:")
    );
  } while (isNaN(chilometriDaPercorrere));
  console.log(chilometriDaPercorrere);
  do {
    etaPasseggero = parseFloat(prompt("Inserisci l'età del passeggero:"));
  } while (isNaN(etaPasseggero));
  console.log(etaPasseggero);

  // # Elaborazione

  // Calcolo il prezzo base senza sconti
  let prezzoTotaleBase = chilometriDaPercorrere * prezzoPerKmBase;
  console.log(prezzoTotaleBase);

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

  // # Output

  // Prezzo con massimo due decimali
  const prezzoConDueDecimali = prezzoTotaleBase.toFixed(2);

  // Preparazione del messaggio finale per l'utente
  const messaggioOutput = `
        Dettagli viaggio:
        Km percorsi: ${chilometriDaPercorrere}
        Età: ${etaPasseggero} anni
        Prezzo finale: €:${prezzoConDueDecimali}
    `;

  // Stampa il risultato nella console e lo mostra in un alert
  console.log(messaggioOutput);
  alert(messaggioOutput);
}
calcolaPrezzoBiglietto();
