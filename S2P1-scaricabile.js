//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*
let numeroCasuale = 10
if ((numeroCasuale === 10)||(numeroCasuale === 5)){
  console.log ("il numero maggiore è 10")
}
*/

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/*
let num = 4
if ((num < 5)||(num > 5)){
  console.log ("Tiny")
} else {
  console.log ("Error")
}

let num = 8
if ((num < 10)||(num > 10)){
  console.log ("Small")
} else {
  console.log ("Error")
}

let num = 12
if ((num < 15)||(num > 15)){
  console.log ("Medium")
} else {
  console.log ("Error")
}

let num = 16
if ((num < 20)||(num > 20)){
  console.log ("Large")
} else {
  console.log ("Error")
}

let num = 25
if ((num <= 20)||(num >= 20)){
  console.log ("Huge")
} else {
  console.log ("Error")
}
*/

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/*
for (let epicode = 0; epicode <= 10; epicode++){
  if (epicode === 3) || (epicode === 8)) {
    continue;
  }
  console.log (epicode)
} 
*/

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/*
for (epicode = 0; epicode <= 10; epicode++) {
    if (epicode === 0) {
     console.log (epicode + ' è zero');
    } else if (epicode % 2 === 0) {
     console.log (epicode + ' è pari');
   } else {
     console.log (epicode + ' è dispari');
   }
}
*/

//ESERCIZI EXTRA NON OBBLIGATORI (NON SVOLTI CAUSA LAVORO)

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/