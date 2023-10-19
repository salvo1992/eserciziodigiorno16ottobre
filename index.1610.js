//ESERCIZI SUGLI IF:

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function trovaIlPiùGrande(numero1, numero2) {
    if (numero1 > numero2) {
      return numero1;   
    } else {
      return numero2;
    }   
    } 
    var numeroMaggiore=trovaIlPiùGrande(10,20);
    console.log("il numero maggiore e:"+numeroMaggiore);
  
  /*
  ESERCIZIO 2
    Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.
  
    num < 5 - mostra in console "Tiny"
    num < 10 - mostra in console "Small"
    num < 15 - mostra in console "Medium"
    num < 20 - mostra in console "Large"
    num >= 20 - mostra in console "Huge"
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  var num=12;
  if(num<5){
    console.log("Tiny");
  }else if (num<10){
    console.log("Small");
  }else if(num<15){
    console.log("Medium");
  }else if(num<20){
    console.log("Large");
  }else{
    console.log("huge");
  }
  
  //ESERCIZI SUI CICLI:
  
  /* ESERCIZIO 3
    Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  for (let numero=0;numero<=10;numero++){
    if(numero===3||numero===8){
        continue;
    }
    console.log(numero);
  }
  /* ESERCIZIO 11
    Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  for (let numero=0;numero<=15;numero++){
    if(numero % 2===0){
       console.log(numero+" è pari");
    }else{
        console.log(numero+" è dispari");
    }
  }
  //ESERCIZI EXTRA NON OBBLIGATORI
  
  /* ESERCIZIO EXTRA 1
    Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  function verificaSeOtto(numero1,numero2){
    if(numero1===8 || numero2===8){
        console.log("almeno uno dei numeri è uguale a 8");
    }else{
        console.log("nessuno dei due numeri è uguale a 8");
    }
  }
  verificaSeOtto(5,8);
  verificaSeOtto(3,4);
  /* ESERCIZIO EXTRA 2
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  // Saldo totale del carrello dell'utente
var totalShoppingCart = 75; 

// Importo fisso per la spedizione
var shippingCost = 10;

// Verifica se il totale del carrello supera 50 per la spedizione gratuita
if (totalShoppingCart > 50) {
  shippingCost = 0; // Spedizione gratuita
}

// Calcola l'importo totale da addebitare all'utente per il checkout
var totalToCharge = totalShoppingCart + shippingCost;

console.log("Importo totale da addebitare: $" + totalToCharge);
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
  */for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
  