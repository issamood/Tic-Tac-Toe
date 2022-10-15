const Player = (name, marker) => {
    const markTile = (tile) => {
        tile.setAttribute('id', marker);
    };
    return{name, marker, markTile};
};

let playGame = (function(xPlayerName, oPlayerName, goesFirst){
    let playerX = Player(xPlayerName, 'xMark');
    let playerO = Player(oPlayerName, 'oMark');
    let gameRunning = true;
    
    if (goesFirst === 'X'){
        
    }
})();

const startBtn = document.querySelector('#startBtn');
startBtn.addEventListener('click', () => {
    const goesFirst = ''
    if (document.querySelector('#playerXStarts'.checked)){
        goesFirst = 'X';
    }
    else if (document.querySelector('#playerOStarts'.checked)){
        goesFirst = 'O';
    }
    else {
        alert('No player has been selected to go first, X will go first.')
    }


    playGame(document.querySelector('#playerXName').value, document.querySelector('#playerOName').value, goesFirst);

})

