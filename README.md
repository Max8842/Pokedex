# Praktikum 

## Tag 1 - Einrichtung und einlesen in Tools

- Was ist Git?
- Was ist GitHub?
- VSCode Editor

- GitHub Account Einrichten
- Pokedex Projekt Erstellen
- Diesen Ordner in das Projekt hochladen
- "tom.lausmann@gmail.com" als Collaboratuer einladen
  number guessing game

- Number Guessing Game Programmiert
- Kleiner Erweiterung hinzugefueht.

## Tag 2 - Dokumentation "Number-Guessing-Game" & Erste Schritte Pokedex

### Aufgabe 1
Erstelle eine README.md in dem `number-guessing-game` ordner und Erstelle
eine Dokumentation. Erstelle die Dokumentation mit `Markdown`.

Sie Sollte Beinhalten:

- Was ist das Number-Guessing-Game?
- Wie benutzt man das Number-Guessing-Game? (Wo kann ich es finden? Wie spiele ich das spiel?)
- Wie wurde das Number-Guessing-Game umgesetzt? (Verwendete Sprachen, Frameworks, Bibliotheken)

Die Dokumentation soll anderne Leuten helfen, dein Spiel zu verstehen und falls
sie interesse haben, dein spiel mit- bzw. weiterzuentwickeln.

## Aufgabe 2


Anforderungen an das Wireframe:

- Jedes Pokemon soll in einer Kachel angezeigt werden
- In den Kacheln sollen folgende Dinge sichtbar sein:
    - Name des Pokemon
    - Sprite (Bild) des Pokemons
    - Typ(en) des Pokemons
    - "Pagination" also Pokemon auf mehreen Seiten aufteilens

Designentscheidungen:
- Wie gross soll die Kachel sein?
- Wie viele Kacheln soll es in einer Zeile geben?
- Wie ordnet man die Inhalte innerhalbeiner Kachel an?

**Wichtig**: Das Ziel ist nicht, so schnell wie moeglich fertig zu werden. 
Eine loesung, hinter der du selber stehen kannst ist viel wichtiger. Lasse dir
Zeit und hinterfrage dich selber, ob es eine gute Loesung ist.

**Auch Wichtig**: Wenn du bestimmte dinge nicht kennst: **durchsuche das Internet**,
experimentiere und probier dich aus.






# Tag 4
Rechercheziele:
Lerne und Verstehe die Grundkonzepte von HTML

[https://developer.mozilla.org/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata]

Bereite HIER am ende der Datei eine Uebersicht mit **Codebeispielen** ueber folgende Themen auf:
- Wofuer steht HTML?
- Was ist ein HTML Tag? 
  - Wie sieht ein HTML Tag aus? 
  - Was sind leere HTML tags?
  - Was sind Attribute?
- Wie ist ein HTML Dokument Aufgebaut? Welche Relevanz haben die einzelnen Bestandteile?

- Welche HTML tags im Head gibt es?
- Welche HTML tags im Body gibt es? (7 Beispiele mit **Codebeispielen**)


1. HTML ist für die struktur und ihalt da

2. ein code element das den anfang und ende eines html elements makiert

3. Spitze klammern <>

4. Elemente die keinen inhalt zwischen den den spitzen klammern haben 

5. funktionälität unnd aussehen eines html element definieren

6. besteht aus tags wie <html>, <head> , <body>. sie bilden die grundstruktur html umschließt das ganze dokument, head entält metadaten und infos für den browser... und body für den sichtbaren inhalt

7.  title meta link style und script

8. <h1-h6> <p> <ul> <li> <img> <src> <alt> <table> <strong>

<h1>Pokedex</h1> sorgt dafür das es größer wird

<ul>
  <li>Water</li>
</ul>       sorgt dafür das es gelistet wird

<img src="bild Link"> fügem das bild in die seite ein und geben den weg um bild an

<table>   macht eine tabelle

<strong> macht das die schrift fett wird   


Erstelle mir ein HTML element: Ein Absatz mit dem Inhalt "Ich bin Max" und dem attribut "class" mit dem wert "beschreibung".

<p class="beschreibung"> ich bin Max </p>





Erstelle mir eine Tabelle, mit 2 Spalten.
Links steht der Name der Information und Rechts der Information.
Die Tabelle soll die Informationen: Name, Alter, Schule, Hobbys
 
<html>
<head>
  <title>Tabelle</table>
  <head>
  <body>
  <table border="1">
  <tr>
  <th>Name</th>
  <th>Alter</th>
  <th>Schule></th>
  <th>Hobby</th>
  </tr>
  <tr>
  <td>Max</td>
  <td>15</td>
  <td>Hans grade schule</td>
  <td>keine</td>
  </tr>
  </table>
  </html>
  </body>
  <>



- Fuege ein Bild eines Pokemons hinzu. (Dein Lieblingspokemon, oder irgendein, wenn du keines hast)
- Erstelle geordnete Liste die deinen Arbeitesweg von Tuer zu Tuer beschreibt, also welche Verkehrsmittel benutzt du,
in welcher Reihenfolge und welche Stationen

display: es bestimmt wie ein html element im browser angezeigt wird und je nach wort wird es beeinflusst wie das element auf andere elemente reagiert

font weight: schrift stärke oder dicke eines textes

text allign: bestimmt  die asrichtung dex textes 

flex wrap: sorgt dafür dass flexbox elemente nicht gezwungen werden in eine einzigen zelle zu bleiben

~ wird verwendet um elemente  auszuwählen die auf der selben ebene im DOM stehen

flexbox: dient dazu layouts einfach flexibel und dynmaisch zu gestalten

input: mit input kann man daten eingeben wie z.b text zahlen passwörter usw

checked überptüft of ein checkox/raido input aktiviert ist

// Zeige das Ergebnis nicht mehr nur in der Konsole, sondern auf der Internet-Seite.

        // 1. Erstelle ein <div> HTML element mit einer ID "ergebnis"
        // 2. Hole dir das HTML Element mit JavaScript hier mit der funktion `document.getElementById`
        //    in schreibe es in die Variable "ergebnis"
         // 3. Setze den inhalt des div Elements indem du das Feld `ergebnis.innerHtml` entsprechend setzt.
        //    Benutze dafür `Template Strings`
        // Erstelle 3 CSS klassen, die jeweils die Hintergrundfarbe des Textes anders setzen (rot, gelb, greun, ... egal)
        // Wähle zufällig eine dieser Klassen aus.
        // Erstelle ein HTML Element mit dem Template Strings, dass die Klasse enthält und das Ergebnis
        // Schreibe das HTML element mit ergenis.innerHTML in das ergebnis element.
 
# Tag 9
- Richte deine IDE ein:
 - Lade dir VS Code herrunter [https://code.visualstudio.com]
 - Installieren Git [https://git-scm.com/downloads]
 - Checke dein Projekt aus [file:///C:/Users/tomla/Desktop/Pokedex/pokedex/index.html]

- Steckbrief erweitern (Fangort, Pokedex Eintrag, ...)
- CSS Hinzufuegen
 - Stats als Balken anzeigen (1 - 255), Beispiel: Wenn pokemon 127 Initialive hat, ist der Balken zu 50% gefuellt.
- Erstelle den Steckbrief fuer die ersten 9 Pokemon (Bisasam - Turtok)
- Verlinke den Steckbrief von der Uebersichtsseite vom entsprechenden Pokemon
