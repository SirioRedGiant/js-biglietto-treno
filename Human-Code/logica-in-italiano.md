# Raccolta dati

- Chiedo all'utente "via prompt" il numero di km
    * Trasformo l'imput dell'utente in un valore numerico
- Chiedo all'utente "via prompt" l'età del passeggero
    * Trasformo l'imput in un valore numerico
- Creo una costante di Euro/km = 0.21

# TODO(later):
- validazione imput dell'utente


# Elaborazione

- Calcolo prezzo base del biglietto(senza sconti)
` applicazione sconti `
- Se l'età dell'utente è inferiore ai 18 anni applico uno sconto del 20%.
    * Calcolo sconto e lo sottraggo dal totale
- Altrimenti se l'età dell'utente è superiore ai 65 anni applico uno sconto del 40 %.
    * Calcolo sconto e lo sottraggo dal totale
- Altrimenti non applico nessuno sconto
# Output

Restituisco prezzo finale con massimo 2 decimali 
"toFixed(2)"

