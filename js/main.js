import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click", ()=>{
    //console.log("New Game");
    onRestartClick();
   // game = new Game();
    //gameView.updateBoard(game);
});

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        //console.log(tile.dataset.index);
        onTileClick(tile.dataset.index);
    });
});



function onTileClick(i){
    //do something
        game.makeMove(i);
        gameView.updateBoard(game);
       // game.nextTurn();
}

function onRestartClick(){
    game = new Game();
    gameView.updateBoard(game);
}

gameView.updateBoard(game);


























// gameView.updateBoard(game);

// console.log(game.board);

// console.log("My turn is ",game.turn);

// game.nextTurn();
// console.log("Your turn is ", game.turn);

// game.makeMove(3);

// console.log(game.board);

// game.nextTurn();
// game.makeMove(8);
// console.log(game.board);

// gameView.updateBoard(game);






