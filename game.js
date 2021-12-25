
const gameBoard = ( () => {
    const board = [];
    
    const getBoard = () => board;
    const initializeBoard = () => {
        for(var i=0; i<9; i++){
            const cell = {
                status: ""
            }
            board.push(cell);
        }
    }

    const clearBoard = () => {
        for(var i = 0; i<9; i++){
            gameBoard.getBoard()[i].status = "";
        }
    }

    return {
        getBoard,
        initializeBoard,
        clearBoard
    }
})()
gameBoard.initializeBoard();
console.log(gameBoard.getBoard());

function clearContents() {
    buttons.forEach(button => {
        while(button.firstChild){
            button.removeChild(button.lastChild);
        }
    })
}

buttons = document.querySelectorAll('.cell');
const turns = document.querySelector(".turns");

var turn = 1;
const turnDisplay = document.createElement('h1');
turnDisplay.innerHTML = "Player "+ turn + " turn";

turns.appendChild(turnDisplay);

function renderContents(button){
    if(turn == 1){
        gameBoard.getBoard()[button.value].status = "X";   
    }
    else{
        gameBoard.getBoard()[button.value].status = "O"
    }

    turn = 3 - turn;
    console.log(firstPlayer.setPatterns);
    console.log(secondPlayer.setPatterns);
    buttonHtml = document.createElement('h1');
    buttonHtml.innerHTML = gameBoard.getBoard()[button.value].status;
    button.appendChild(buttonHtml);
    console.log(gameBoard.getBoard());

    
    turnDisplay.innerHTML = "Player "+ turn + " turn";
    turns.appendChild(turnDisplay);

    if(checkWin(firstPlayer)){
        turnDisplay.innerHTML = "Player "+ (3-turn) + " Have Won The Game!";
        console.log("First Player won");
        startGame();

    }
    if(checkWin(secondPlayer)){
        turnDisplay.innerHTML = "Player "+ (3-turn) + " Have Won The Game!";
        console.log("Second Player Won");
        startGame();
    }
}

function gameWatch(){
    buttons.forEach(button => {
        button.addEventListener('click', function(){

            if(gameBoard.getBoard()[button.value].status != ""){
                return;
            }

            if(turn == 1){
                firstPlayer.setPatterns.add(Number(button.value));
            }
            else{
                secondPlayer.setPatterns.add(Number(button.value));
            }
            renderContents(button);
            
        })
        
    
    });
}

const playerFactory = (playerNum) => {
    
    const setPatterns = new Set();
    return {
        playerNum, 
        setPatterns
    }

}

const firstPlayer = playerFactory(1);
const secondPlayer = playerFactory(2);
gameWatch();

startGame();
function startGame(){
    console.log('a');
    firstPlayer.setPatterns = new Set();
    secondPlayer.setPatterns = new Set();
    clearContents();
    gameBoard.clearBoard();
    turn = 1;
}

function checkWin(player){
    if((player.setPatterns.has(0) && player.setPatterns.has(1) && player.setPatterns.has(2)) ||
        (player.setPatterns.has(3) && player.setPatterns.has(4) && player.setPatterns.has(5)) ||
        (player.setPatterns.has(6) && player.setPatterns.has(7) && player.setPatterns.has(8)) || 
        (player.setPatterns.has(0) && player.setPatterns.has(3) && player.setPatterns.has(6)) ||
        (player.setPatterns.has(1) && player.setPatterns.has(4) && player.setPatterns.has(7)) ||
        (player.setPatterns.has(2) && player.setPatterns.has(5) && player.setPatterns.has(8)) ||
        (player.setPatterns.has(0) && player.setPatterns.has(4) && player.setPatterns.has(8)) ||
        (player.setPatterns.has(2) && player.setPatterns.has(4) && player.setPatterns.has(6)) ){
            return true;
    }
    else{
        return false;
    }
}



