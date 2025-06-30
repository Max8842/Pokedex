document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("load-more").addEventListener("click", function() {
        var zahl1 = Number(document.getElementById("zahl1").value);
        var zahl2 = Number(document.getElementById("zahl2").value);
        
        var summe = zahl1 + zahl2; 

        
        var ergebnis = document.getElementById("ergebnis");       

       const klassen = [`red`, `green`, `yellow`];
       const zufallsKlasse = klassen[Math.floor(Math.random() * klassen.length)];
       const Html = `<div class="${zufallsKlasse}">Ergebnis: ${summe}</div>`;
       const foo = `
       
       `;
       ergebnis.innerHTML += Html
    });
});
