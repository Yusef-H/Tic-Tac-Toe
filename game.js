
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

buttons = document.querySelectorAll('.cell');

renderContents();
var turn = 1;

function renderContents(){
    buttons.forEach(button => {
        if(gameBoard.getBoard()[button.value].status == "mark")
        {
            if(turn == 1){
                gameBoard.getBoard()[button.value].status = "X"
            }
            else{
                gameBoard.getBoard()[button.value].status = "Y"
            }
            turn = 3 - turn;
            console.log(firstPlayer.setPatterns);
            console.log(secondPlayer.setPatterns);
            console.log(turn);
            buttonHtml = document.createElement('h1');
            buttonHtml.innerHTML = gameBoard.getBoard()[button.value].status;
            button.appendChild(buttonHtml);
            console.log(gameBoard.getBoard());
            return;
        }
    })
}

function clearContents() {
    buttons.forEach(button => {
        while(button.firstChild){
            button.removeChild(button.lastChild);
        }
    })
}

function play(){
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
            gameBoard.getBoard()[button.value].status = "mark";
            renderContents(turn);
            return;
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


game(firstPlayer);
game(secondPlayer);


function game(player){
    

    play(turn);
    
    if((player.setPatterns.has(0) && player.setPatterns.has(1) && player.setPatterns.has(2)) ||
        (player.setPatterns.has(3) && player.setPatterns.has(4) && player.setPatterns.has(5)) ||
        (player.setPatterns.has(6) && player.setPatterns.has(7) && player.setPatterns.has(8)) || 
        (player.setPatterns.has(0) && player.setPatterns.has(3) && player.setPatterns.has(6)) ||
        (player.setPatterns.has(1) && player.setPatterns.has(4) && player.setPatterns.has(7)) ||
        (player.setPatterns.has(2) && player.setPatterns.has(5) && player.setPatterns.has(8)) ||
        (player.setPatterns.has(0) && player.setPatterns.has(4) && player.setPatterns.has(8)) ||
        (player.setPatterns.has(2) && player.setPatterns.has(4) && player.setPatterns.has(6)) ){
            console.log(player.playerNum + "Has Won");
            gameBoard.clearBoard();
            clearContents();
            player.setPatterns = new Set();
    }
        
       
    
        
        
    
}

