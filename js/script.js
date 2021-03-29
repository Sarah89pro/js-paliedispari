/* Esercizio 2
Pari e Dispari
-L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
-Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
-Sommiamo i due numeri
-Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
-Dichiariamo chi ha vinto.*/

var evenOddUser = parseInt(prompt("Quale numero sceglieresti?\nPari?\nO dispari?\nInseriscine uno fra 1 e 5"));
console.log(evenOddUser);

//generare numero random per computer
for (var i = 0; i < 1; i++) { //genera un numero random una volta sola
    var newNumber = randomNumberComputer (1, 5); //con un valore compreso fra 1 e 5
    console.log(newNumber);
    //var sum = newNumber + evenOddUser;
    //console.log(sum);
}


//funzione per numero ottenere numero random
function randomNumberComputer (min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) ) + min;
    return random;
}
//funzione per sommare il numero generato dal computer con quello scelto dal giocatore






//funzione per controllare se i valori sono pari o dispari
//function EvenOdd 




/*function EvenOdd (number) {
    if (number %2 === 0) {
        return "pari";
    }
    return "dispari";
}*/










/* Esercizio 1
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

var insertWord = prompt("inserisci una parola").toLowerCase().trim(); //mi assicuro che la parola inserita sia pulita da spaziature e in lowercase

var revertedWord = ReverseChars(insertWord);

if (revertedWord == insertWord) { //se i due valori coincidono ho una palindroma, altrimenti no
  console.log(insertWord + " è una parola palindroma");
} else {
    console.log(insertWord + " non è una parola palindroma");
}


//funzione per invertire i caratteri di una stringa
function ReverseChars(word) {
    var reverse = '';
    for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}*/
