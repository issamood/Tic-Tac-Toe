//Global Variables
let gameBoard = new Array(9).fill('');
let isRunning = false;
let whoseTurn = 'x';
const player = (name) => {
    return {name};
}
const xPlayer = player('');
const oPlayer = player('');

function updatePlayerName(){
    //Create player objects with name
    xPlayer.name = document.querySelector('.xPlayer').value
    oPlayer.name = document.querySelector('.oPlayer').value
}

function whichWinner(marker){
    if (marker == 'x'){
        if (xPlayer.name == ''){
            alert('X wins!');
        }
        else {
            alert(xPlayer.name + ' wins!');
        }
    }
    else if (marker == 'o'){
        if (oPlayer.name == ''){
            alert('O wins!');
        }
        else {
            alert(oPlayer.name + ' wins!');
        }
    }
}

//Update gameboard array and ui
function markBoard (tile, marker){
    //Update gameboard array
    gameBoard[tile] = marker;

    //Check win
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const condition of winConditions) {
        if (gameBoard[condition[0]] == marker && gameBoard[condition[1]] == marker && gameBoard[condition[2]] == marker) {
            whichWinner(marker);
            break;
        }
    }

    if (whoseTurn == 'x'){
        whoseTurn = 'o';
    }
    else if (whoseTurn == 'o'){
        whoseTurn = 'x';
    }
}

//Add click event for tiles
const tiles = document.querySelectorAll('.tile');
for (const tile of tiles){
    tile.addEventListener('click', () => {
        updatePlayerName();
        if (whoseTurn == 'x' && tile.classList.contains('xMark') == false && tile.classList.contains('oMark') == false){
            tile.classList.add('xMark');
        }
        else if (whoseTurn == 'o' && tile.classList.contains('xMark') == false && tile.classList.contains('oMark') == false){
            tile.classList.add('oMark');
        }
        if (gameBoard[tile.id] == ''){
            markBoard(tile.id, whoseTurn);
        }
    });
}

//Restart Button Functionality
const restartBtn = document.querySelector('button');
restartBtn.addEventListener('click', () => {
    gameBoard = new Array(9).fill('');
    isRunning = false;
    whoseTurn = 'x';
    xPlayer.name = '';
    oPlayer.name = '';
    for (const tile of tiles){
        tile.classList.remove('xMark');
        tile.classList.remove('oMark');
        
    }
    document.querySelector('.xPlayer').value = '';
    document.querySelector('.oPlayer').value = '';
});