# Pokedex

## Aufgaben / TODOs:
- [x] Mache mit CSS die Ramen um den Entwicklungslinien (Klasse: .evolution-line) *rund*
- [x] Ersetze die Liste der Typen bei jedem Pokemon mit einer *ungeordneten liste* `<ul>`.
- [x] Ersetze die grauen Boxen der Pokemon mit den Sprints der Pokemon

- [x] Mache die Namen der Pokemon *fett*
- [x] Suche dir Farben aus und packe sie auf die elemente die du willst.

- [x] Textfarbe (`color`) von den Pokemon namen auf die Farbe mit der Variable `--cordovan`
- [x] Hintergroundfarbe (`background-color`) von den Sprites auf die Farbe `--cinereous`

- [ ] Wie funktionieren Links in HTML?
- [ ] Mach die Gen ... elemente zu Links, die auf die URL `http://google.de` zeigen.

## Tag 8
- Beschreibe die neuen funktionen, die du gestern beim auflisten der typen benutzt hast (map und join)
- Wenn man auf eine bestimmte Generation unten klickt, soll der Bereich mit den Pokemon und entwicklungslinien
  *geleert* werden und die Pokemon ab der gewaehlten generation gezeigt werden.

  map macht ein array in ein neues array nur mit den typ namen

  t ist ein platz halter  für jedes einzelene elemet in array

  join macht  aus ein array von strings ein einzelnen und " "ist der trenner zwischen den elementen

  ```js
  var types = ["grass", "poison"];

  var liste = type.map(t => `<li>${t}</li>`);
 
  var liste = [grass , poison]
 
  ```