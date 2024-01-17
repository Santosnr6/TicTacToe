# Tic-Tac-Toe

## Introduktion
Detta är en övning i flera delmoment där tanken är att allteftersom vi förskaffar oss nya kunskaper så kommer vi att kunna bygga på vårt spel, för att i slutändan förhoppningsvis få ett fungerande Tic-Tac-Toe (tre-i-rad).
Allt efersom kommer vi att bygga på spelet genom att använda oss av grundläggande kodning, arrayer, objekt, DOM-inläsning, DOM-modifikation, händelsehantering, verifikation, felhantering med mera.

## Instruktioner

### Programmet
Programmet består av två stycken filer, index.html och script.js. Ni kan för tillfället helt bortse från index.html, men senare kommer ni att behöva använda den för att hämta input från användaren. 
Det är MYCKET VIKTIGT att ni inte ändrar på någonting mellan rad 19-70 i index.html. Däremot så finns möjligheten att skicka in lite testdata från rad 73 och nedåt. Några exempel ligger redan inne.

Själva programmet i script.js består av ett så kallat global objekt. Detta objekt heter oGameData, och innehåller allt från båda spelarnas symboler, namn, färgval osv, till spelplanen. Tack vare att allt detta är globalt så kommer ni att kunna komma åt denna data från alla era funktioner senare under utvecklingens gång. (För att komma åt spelplanen anropar ni tex oGameData.gameField).

### Versionshantering
Nu har det äntligen blivit dags att testa på brancher här på GitHub! Såhär vill jag att strukturen är uppbyggd:
* Er mainbranch får endast innehålla en fullt fungerande version av spelet. Detta innebär att ni mergar ert projekt till main först EFTER att ni är helt färdiga med spelet.
* Skapa en devbranch. Ni får ALDRIG programmera direkt i er devbranch. Devbranchen skall bara innehålla helt fungerande funktioner.
* Innan ni börjar programmera en funktion så skapar ni en featurebranch med den funktionens namn (tex feat-isWinner), med er devbranch som source. Ni sitter sedan och programmerar i er featurebranch tills ni skrivit en funktion som är färdig och testad, innan ni pushar den till GitHub och där mergar den till er devbranch.
* På så sätt fortsätter ni med att varje ny funktion får en ny featurebranch som pushas och mergas till dev först när den är färdig och testad.
* Och som sagt: först EFTER att dev innehåller en fullt fungerande version av ert spel på mergar ni ihop dev med main.

### Första etappen
Denna första etapp skall vi sätta era kunskaper ordentligt på prov för att se vad ni har lärt er såhär långt! Den första etappen består av att skapa två rättningsfunktioner för spelet. En som kontrollerar om vi har en vinnare(isWinner()), och en som kontrollerar om spelet är oavgjort (checkForDraw()).
Mer genomgående instruktioner finner ni i kommentarer ovanför respektive funktion. (Notera att dessa kommentarer enbart är ett förslag på hur ni kan gå till väga. Det enda kravet är att funktionen skall returnera sant eller falskt). 

För att testa era funktioner så kan ni enkelt mata in data i arrayen oGameData.gameField som ni finner på rad 20 i koden.

#### isWinner(playerIn)
Här tar vi emot en inkommande spelare, antingen 'X' eller 'O'. Tanken är att ni skall söka igenom de kombinationer på spelplanen som skulle innebära en vinst, och kontrollera om alla dessa positioner i varje kombination innehåller playerIn.
Funktionen SKALL returnera antingen true eller false.

#### checkForDraw()
Här kontrollerar ni om alla platser på spelplanen är upptagna eller inte.
Funktionen SKALL returnera antingen true eller false.

### Andra etappen
Denna andra etapp skall vi bygga spelet såpass långt så att det går att spela. Vi kommer att att använda oss av bootstrap klassen "d-none" för att bestämma vilka element i DOM:en som skall synas och vice versa. Därutöver kommer vi att läsa in objekt från DOM:en, placera händelselyssnare, skicka variabler, ta emot parametrar, skriva ut saker på skärmen med mera.

För att kicka igång programmet behöver ni någonstans i er "script.js" först anropa funktionen "prepGame()".

#### prepGame()
Här skall ni lägga till klassen "d-none" på elementet i DOM-en med id:t "gameArea", samt lägga en lyssnare på "Starta spelet!"-knappen som lyssnar efter ett klick. När den klickas skall ni anropa funktionen "initiateGame()".

#### initiateGame()
Lägg till kod för följande:
* Göm formuläret genom att lägga till klassen "d-none".
* Visa spelplanen genom att ta bort klassen "d-none" på elementet med id:t "gameArea".
* Ta bort textInnehållet i elementet med id:t "errorMsg".
* Spara information om båda spelarna i objektet "oGameData" (dvs. användarnamn och färgval för respektive spelare).
* Töm spelplanen genom att läsa in alla td-element, loopa igenom dem, och ändra dess text till en tom sträng (inga mellanslag).
* Deklarera de lokala variablerna "playerChar" och "playerName".
* Bestäm vilken spelare som skall börja genom att slumpa fram ett tal mellan 0 och 1.
* Om talet är mindre än 0.5 så tilldelar ni:
    - playeChar = oGameData.playerOne;
    - playerName = oGameData.nickNamePlayerOne;
    - oGameData.currentPlayer = oGameData.playerOne;
* Om talet är större än, eller lika med, 0.5 gör ni samma sak som ovan, fast med spelare 2.
* Ändra texten i h1-elementet som ligger i div-elementet med klassen "jumbotron" till "Aktuell spelare är XXX", där ni ersätter XXX med namnet på den aktuella spelaren.
* Lägg till en klicklyssnare på tabellen som innehåller spelplanen. Vid klick skall funktionen "executeMove()" anropas.

#### executeMove()
* OM klickhändelsen INTE skett på en tabellcell (td) skall ni inte göra någonting. Annars forstätt följa kokboken.
* Kontrollera att den klickade cellen är ledig. Om den är ledig, gör följande:
    - Hämta ut attributet "data-id" från den klickade cellen, och använd detta för att sätta "oGameData.gameField" på den hämtade positionen till nuvarande spelare "oGameData.currentPlayer" (som kommer vara "X", eller "O").
    - Anropa funktionen "changePlayer()"
* Anropa er rättningsfunktion för att kontrollera om spelet är slut (den kommer returnera antingen 1, 2, 3 för slut, eller 0 om spelet inte är slut). Om spelet är slut för följande (annars gör ni inget):
    - Anropa gameOver och skicka med resultatet (1, 2 eller 3).


#### changePlayer()
* Kontrollera vem som är nuvarande spelare, och utifrån det sätt bakgrundsfärgen på den klickade tabellcellen till aktuell spelares färg. Sätt även cellens textinnehåll till spelarens symbol ("X" eller "O").
* Ändra därefter oGameData.currentPlayer till den andra spelaren, och uppdatera texten i jumbotronen till den nya spelarens namn.


#### gameOver(result)
Denna funktion tar emot resultatet för spelet (1 om spelare 1 vunnit, 2 och spelare 2 vunnit, eller 3 om spelet slutat oavgjort)
* Ta bort klicklyssnaren på tabellen
* Ta bort klassen "d-none" på formuläret
* Lägg till klassen "d-none" på spelplanen
* Kontrollera vilken spelare som vunnit
* Skriv ut ett vinnarmeddelande i jumbotronen, följa av "Spela igen?".
* Anropa funktionen "initGlobalObject()".

### Tredje etappen
To be continued...
