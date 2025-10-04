const winningCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [3, 4, 5],
    [1, 4, 7]
];

function createPlayer(name, id) {
    const playerName = name;
    const scoreid = id; //id isn't used
    return { playerName, scoreid };
}

function checkScore(boardArray) {
    var arrayLength = winningCombos.length;
    for (var i = 0; i < arrayLength; i++) {
        switch (boardArray[winningCombos[i][0]] + boardArray[winningCombos[i][1]] + boardArray[winningCombos[i][2]]) {
            case 3:
                console.log("player 1 wins");
                return "player1"; //player 1 win
            case -3:
                console.log("player 2 wins");
                return "player2"; //player 2 win
        }
    }
    if (!boardArray.includes(0)) { //tie
        console.log("tiebreaker");
        return "tie";
    };
    console.log("game continues");
    return "continue"; //game continues
}

// originally createGame();
(function () {
    const gameBoard = [0, 0, 0,
        0, 0, 0,
        0, 0, 0];

    const player1 = createPlayer("player1", 1);
    const player2 = createPlayer("player2", -1);

    const gameText = document.getElementById(`gamestate`);
    gameText.textContent = "game is ongoing."

    const slots = [];
    for (let i = 0; i < 9; i++) {
        slots[i] = document.getElementById(`${i + 1}`);
        slots[i].addEventListener("click", function () {
            gameTurn(i);
        });
    };

    const renameButton1 = document.getElementById(`rename`);
    renameButton1.addEventListener("click", function () {
        renamePlayers();
    });

    function renamePlayers() {
        player1.playerName = document.getElementById(`name1`).value;
        player2.playerName = document.getElementById(`name2`).value;
    }


    const restartGame = document.getElementById(`reset`);
    restartGame.addEventListener("click", function () {
        gameReset();
    });

    function gameReset() {
        for (var i = 0; i < 9; i++) {
            gameBoard[i] = 0;
            const clearImg = document.getElementById(`clear`); // this line only selects one element at once (so only one can be deleted at once), but if we take advantage of the loop, it'll delete all of them.
            if (clearImg !== null) {
                clearImg.remove();
            }

        }
        console.log(gameBoard);
        gameText.textContent = "game is ongoing."
        gameState = "continue";
    };




    let gameState = "continue";
    var turnValue = 1; //starting turn is X

    function gameTurn(i) {

        if (turnValue === 1 && gameBoard[i] === 0 && gameState === "continue") {
            gameBoard[i] = 1;
            turnValue = -1;

            const turnImage = document.createElement("img");
            turnImage.src = "x.jpg";
            turnImage.id = "clear";
            slots[i].appendChild(turnImage);

            gameState = checkScore(gameBoard);
            gameStateCheck();

        } else if (gameBoard[i] === 0 && gameState === "continue") {
            gameBoard[i] = -1;
            turnValue = 1;

            const turnImage = document.createElement("img");
            turnImage.src = "o.jpg";
            turnImage.id = "clear";
            slots[i].appendChild(turnImage);

            gameState = checkScore(gameBoard);
            gameStateCheck();
        };
    };


    function gameStateCheck() {
        if (gameState !== "continue") {
            switch (gameState) {
                case "player1":
                    console.log(player1.playerName + " wins!");
                    gameText.textContent = (player1.playerName + " wins!")
                    break;
                case "player2":
                    console.log(player2.playerName + " wins!")
                    gameText.textContent = (player2.playerName + " wins!")
                    break;
                case "tie":
                    console.log("tiebreaker!");
                    gameText.textContent = ("tiebreaker!")
                    break;
            }
        }

    }

})();






// createGame();