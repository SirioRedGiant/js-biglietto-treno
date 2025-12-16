/*
    FUNZIONE CALCOLO COSTO BIGLIETTO
*/
function calcolaPrezzoBiglietto() {
  // MOdifica della raccolta dati per verificari gli imput
  const PrezzoPerKmBase = 0.21;
  let chilometriDaPercorrere;
  let etaPasseggero;

  // Validare gli imput dell'utente

 COME LO FAREI CON PYTHON
 
  while True:
        try:
            input_km = input("Inserisci il numero di chilometri da percorrere (deve essere un numero positivo): ")
            chilometri_da_percorrere = float(input_km) 

            if chilometri_da_percorrere <= 0:
                print("Errore: Inserisci un valore numerico valido e positivo per i chilometri.")
                continue 
            else:
                break 

        except ValueError:
            print("Errore: Input non valido. Assicurati di inserire solo numeri.")
            continue


    while True:
        try:
            input_eta = input("Inserisci l'età del passeggero (deve essere un numero intero positivo): ")
            eta_passeggero = int(input_eta)

            if eta_passeggero < 0 or eta_passeggero > 120:
                print("Errore: Inserisci un'età valida tra 0 e 120 anni.")
                continue
            else:
                break

        except ValueError:
            print("Errore: Input non valido. Assicurati di inserire un numero intero.")
            continue
*/
  /*
    
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
    */

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
  // Se nessuna delle condizioni sopra è vera, non viene applicato nessuno sconto. else tascurabile?

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
