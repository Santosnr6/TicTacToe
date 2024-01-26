"use strict";

/**
 * Globalt objekt som innehåller de attribut som ni skall använda.
 * Initieras genom anrop till funktionern initGlobalObject().
 */
let oGameData = {};

window.addEventListener('load', () => {
    initGlobalObject();
    prepGame();
});



/**
 * Initerar det globala objektet med de attribut som ni skall använda er av.
 * Funktionen tar inte emot några värden.
 * Funktionen returnerar inte något värde.
 */
function initGlobalObject() {

    //Datastruktur för vilka platser som är lediga respektive har brickor
    //Genom at fylla i här med antingen X eler O kan ni testa era rättningsfunktioner 
    oGameData.gameField = ['', '', '', '', '', '', '', '', ''];
    
    /* Testdata för att testa rättningslösning */
    //oGameData.gameField = ['X', 'X', 'X', '', '', '', '', '', ''];
    //oGameData.gameField = ['X', '', '', 'X', '', '', 'X', '', ''];
    //oGameData.gameField = ['X', '', '', '', 'X', '', '', '', 'X'];
    //oGameData.gameField = ['', '', 'X', '', 'X', '', 'X', '', ''];
    //oGameData.gameField = ['X', 'O', 'X', '0', 'X', 'O', 'O', 'X', 'O'];

    //Indikerar tecknet som skall användas för spelare ett.
    oGameData.playerOne = "X";

    //Indikerar tecknet som skall användas för spelare två.
    oGameData.playerTwo = "O";

    //Kan anta värdet X eller O och indikerar vilken spelare som för tillfället skall lägga sin "bricka".
    oGameData.currentPlayer = "";

    //Nickname för spelare ett som tilldelas från ett formulärelement,
    oGameData.nickNamePlayerOne = "";

    //Nickname för spelare två som tilldelas från ett formulärelement.
    oGameData.nickNamePlayerTwo = "";

    //Färg för spelare ett som tilldelas från ett formulärelement.
    oGameData.colorPlayerOne = "";

    //Färg för spelare två som tilldelas från ett formulärelement.
    oGameData.colorPlayerTwo = "";

    //Antalet sekunder för timerfunktionen
    oGameData.seconds = 5;

    //Timerns ID
    oGameData.timerId = null;

    //Från start är timern inaktiverad
    oGameData.timerEnabled = false;

    //Referens till element för felmeddelanden
    oGameData.timeRef = document.querySelector("#errorMsg");
}

/**
 * Kontrollerar för tre i rad.
 * Returnerar 0 om det inte är någon vinnare, 
 * returnerar 1 om spelaren med ett kryss (X) är vinnare,
 * returnerar 2 om spelaren med en cirkel (O) är vinnare eller
 * returnerar 3 om det är oavgjort.
 * Funktionen tar inte emot några värden.
 */
function checkForGameOver() {   
    //Kontrollerar om "X" vunnit genom att köra rättningsfunktionerna, om så är fallet returneras 1
    if (checkWinner('X')){
       return 1;
    }
    //Kontrollerar om "O" vunnit genom att köra rättningsfunktionerna, om så är fallet returneras 2
    if (checkWinner('O')){
        return 2;
    }
    //Kontrollerar om spelet är oavgjort, returnerar isåfall 3
    if(checkForDraw()) {
        return 3;
    }
    //Annars returneras 0, och spelet fortlöper
    else {
        return 0;
    }
}

//Skapa en array av alla vinnande kombinationer.
//Skapa en flagga för isWinner.
//Loopa igenom alla winningCombos.
//I varje loop kontrollerar ni om alla platser i oGameData.GameField 
//som motsvarar nuvarande combo innehåller playerIn. Om sant, ändra värdet på flaggan.
//Returnera flaggan isWinner
function checkWinner(playerIn) {
    const winningCombos = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    let isWinner = false;

    for(let i = 0; i < winningCombos.length; i++) {
        let combo = winningCombos[i];
        let a = oGameData.gameField[combo[0] - 1];
        let b = oGameData.gameField[combo[1] - 1];
        let c = oGameData.gameField[combo[2] - 1];

        if(playerIn === a && playerIn === b && playerIn === c) {
            isWinner = true;
            break;
        }
    }

    return isWinner;
}

//Kontrollera om alla platser i oGameData.GameField är fyllda. Om sant returnera true, annars false.
function checkForDraw() {
    if(oGameData.gameField.includes('')) {
        return false;
    } else {
        return true;
    }
}

//Funktion som förbereder spelet inför start
function prepGame() {
    console.log('prepGame()');
    document.querySelector('#gameArea').classList.add('d-none');
    document.querySelector('#newGame').addEventListener('click', () => {
        if(validateForm()) {
            initiateGame();
        }
    });
}

function validateForm() {
    console.log('validateForm()');

    const nickOne = document.querySelector('#nick1');
    const nickTwo = document.querySelector('#nick2');
    const colorOne = document.querySelector('#color1');
    const colorTwo = document.querySelector('#color2');

    try {
        if(nickOne.value.length < 3 || nickOne.value.length > 10) {
            throw {
                'nodeRef' : nickOne,
                'msg' : 'Namnet måste vara mellan 3 och 10 tecken!'
            }
        } else if (nickTwo.value.length < 3 || nickTwo.value.length > 10) {
            throw {
                'nodeRef' : nickTwo,
                'msg' : 'Namnet måste vara mellan 3 och 10 tecken!'
            }
        } else if (colorOne.value === '#000000' || colorOne.value === '#ffffff') {
            throw {
                'nodeRef' : colorOne,
                'msg' : 'Färgen får inte vara vit eller svart!'
            }
        } else if (colorTwo.value === '#000000' || colorTwo.value === '#ffffff') {
            throw {
                'nodeRef' : colorTwo,
                'msg' : 'Färgen får inte vara vit eller svart!'
            }
        }
        return true;
    } catch(error) {
        document.querySelector('#errorMsg').textContent = error.msg;
        error.nodeRef.focus();
        return false;
    }
}

function initiateGame() {
    console.log('initiateGame()');
    document.querySelector('#theForm').classList.add('d-none');
    document.querySelector('#gameArea').classList.remove('d-none');
    document.querySelector('#errorMsg').textContent = '';

    oGameData.nickNamePlayerOne = document.querySelector('#nick1').value;
    oGameData.nickNamePlayerTwo = document.querySelector('#nick2').value;
    oGameData.colorPlayerOne = document.querySelector('#color1').value;
    oGameData.colorPlayerTwo = document.querySelector('#color2').value;

    const tdRefs = document.querySelectorAll('td');
    tdRefs.forEach(ref => {
        ref.textContent = '';
    });

    let playerChar = '';
    let playerName = '';

    const random = Math.random();
    if(random < 0.5) {
        playerChar = oGameData.playerOne;
        playerName = oGameData.nickNamePlayerOne;
        oGameData.currentPlayer = oGameData.playerOne;
    } else {
        playerChar = oGameData.playerTwo;
        playerName = oGameData.nickNamePlayerTwo;
        oGameData.currentPlayer = oGameData.playerTwo;
    }

    const headRef = document.querySelector('.jumbotron > h1');
    headRef.textContent = `Aktuell spelare är ${playerName}`;

    document.querySelector('#gameArea').addEventListener('click', executeMove);
}

function executeMove (event) {
    console.log('executeMove()');
    
    if(event.target.tagName === 'TD') {
        if(event.target.textContent === '') {
            const dataId = event.target.getAttribute('data-id');
            oGameData.gameField[dataId] = oGameData.currentPlayer;
            event.target.textContent = oGameData.currentPlayer;
            
            if(oGameData.currentPlayer === "X") {
                event.target.style.backgroundColor = oGameData.colorPlayerOne;
            } else {
                event.target.style.backgroundColor = oGameData.colorPlayerTwo;
            }
            changePlayer();
        }
    }
    const result = checkForGameOver();
    console.log(result);
    if(result !== 0) {
        gameOver(result);
    }
}

function changePlayer() {
    console.log('changePlayer()');


}

// function timer() {

// }

function gameOver(result) {
    
    // initGlobalObject();
}
