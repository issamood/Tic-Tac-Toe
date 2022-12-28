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

    console.log(xPlayer.name);
    console.log(oPlayer.name);
}



//Update gameboard array and ui
function markBoard (tile, marker){
    //Update gameboard array
    gameBoard.splice(tile,1,marker);

    //Check win
    if (gameBoard[0] == 'x' || gameBoard[0] == 'o'){
        if (gameBoard[0] == gameBoard[1] && gameBoard[0] == gameBoard[2]){
            if (gameBoard[0] == 'x'){
                alert(xPlayer.name + ' wins!');
            }
            else if (gameBoard[0] == 'o'){
                alert(oPlayer.name + ' wins!');
            }
        }
        else if (gameBoard[0] == gameBoard[3] && gameBoard[0] == gameBoard[6]){
            if (gameBoard[0] == 'x'){
                alert(xPlayer.name + ' wins!');
            }
            else if (gameBoard[0] == 'o'){
                alert(oPlayer.name + ' wins!');
            }
        }
        else if (gameBoard[0] == gameBoard[4] && gameBoard[0] == gameBoard[8]){
            if (gameBoard[0] == 'x'){
                alert(xPlayer.name + ' wins!');
            }
            else if (gameBoard[0] == 'o'){
                alert(oPlayer.name + ' wins!');
            }
        }
    }

    if (gameBoard[1] == 'x' || gameBoard[1] == 'o'){
        if (gameBoard[1] == gameBoard[4] && gameBoard[1] == gameBoard[7]){
            if (gameBoard[1] == 'x'){
                alert(xPlayer.name + ' wins!');
            }
            else if (gameBoard[1] == 'o'){
                alert(oPlayer.name + ' wins!');
            }
        }
    }

    if (gameBoard[2] == 'x' || gameBoard[2] == 'o'){
        if (gameBoard[2] == gameBoard[5] && gameBoard[2] == gameBoard[8]){
            if (gameBoard[2] == 'x'){
                alert(xPlayer.name + ' wins!');
            }
            else if (gameBoard[2] == 'o'){
                alert(oPlayer.name + ' wins!');
            }
        }
    }

    if (gameBoard[3] == 'x' || gameBoard[3] == 'o'){
        if (gameBoard[3] == gameBoard[4] && gameBoard[3] == gameBoard[5]){
            if (gameBoard[3] == 'x'){
                alert(xPlayer.name + ' wins!');
            }
            else if (gameBoard[3] == 'o'){
                alert(oPlayer.name + ' wins!');
            }
        }
    }

    if (gameBoard[6] == 'x' || gameBoard[6] == 'o'){
        if (gameBoard[6] == gameBoard[7] && gameBoard[6] == gameBoard[8]){
            if (gameBoard[6] == 'x'){
                alert(xPlayer.name + ' wins!');
            }
            else if (gameBoard[6] == 'o'){
                alert(oPlayer.name + ' wins!');
            }
        }
        else if (gameBoard[6] == gameBoard[4] && gameBoard[6] == gameBoard[2]){
            if (gameBoard[6] == 'x'){
                alert(xPlayer.name + ' wins!');
            }
            else if (gameBoard[6] == 'o'){
                alert(oPlayer.name + ' wins!');
            }
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
        console.log(gameBoard);
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