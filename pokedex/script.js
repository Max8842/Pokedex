document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("load-more").addEventListener("click", function() {
        var zahl1 = Number(document.getElementById("zahl1").value);
        var zahl2 = Number(document.getElementById("zahl2").value);
        
     var summe = zahl1 + zahl2; 

        console.log( "Ergebnis "+ summe );
    });
});
