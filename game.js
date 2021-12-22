
const gameBoard = ( () => {
    const board = [];
    
    const getBoard = () => board;
    const initializeBoard = () => {
        for(var i=0; i<9; i++){
            const cell = {
                status: "O"
            }
            board.push(cell);
        }
    }

    return {
        getBoard,
        initializeBoard
    }
})()
gameBoard.initializeBoard();
console.log(gameBoard.getBoard());

buttons = document.querySelectorAll('.cell');

renderContents();

function renderContents(){
    buttons.forEach(button => {
        buttonHtml = document.createElement('h1');
        buttonHtml.innerHTML = gameBoard.getBoard()[button.value].status;
        console.log(buttonHtml);
        button.appendChild(buttonHtml);
    })
}



buttons.forEach(button => {
    button.addEventListener('click', function(){
        console.log(button.value);
        gameBoard.getBoard()[button.value].status = "X";
        console.log(gameBoard.getBoard());
    })
    
});
