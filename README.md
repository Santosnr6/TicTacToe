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
To be continued...

