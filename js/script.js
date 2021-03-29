/* Esercizio 1
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

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
}
