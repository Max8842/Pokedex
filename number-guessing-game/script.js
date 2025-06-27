let NumberToGuess = Math.round(Math.random() * 100000);
let tries = 0;
let previousGuesses = [];

function GuesstheNumber() {
    tries += 1;
    displayTries.innerHTML = "Versuche: " + tries;
    
    let guess = MyNumber.value;
    // Überprüfen ob die Zahl bereits geraten wurde
    if (previousGuesses.includes(guess)) {
        headline.innerHTML = "Du hast diese Zahl bereits geraten!";
        MyNumber.value = "";
        return; // funktion frühzeitig beenden
    }

    previousGuesses.push(guess); // Zahl zu den geratenen Zahlen hinzufügen
    guessedNumbersList.innerHTML = previousGuesses;

    if(NumberToGuess == MyNumber.value) {
        headline.innerHTML = "du hast gewonnen!!!";
        let jsConfetti = new JSConfetti();
        jsConfetti.addConfetti()
    }

    if(NumberToGuess > MyNumber.value) {
        headline.innerHTML = "Die Zahl ist größer!";
    }

    if(NumberToGuess < MyNumber.value) {
        headline.innerHTML = "Die Zahl ist kleiner!";
    }
    
    MyNumber.value = "";
 }
