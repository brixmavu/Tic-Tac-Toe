var currentPlayer = "X";  // Keeps track of the current player
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // Keeps track of the game board state

// Add event listeners to all cells
for (var i = 1; i <= 9; i++) {
    var cell = document.getElementById("cell-" + i);
    cell.addEventListener("click", cellClicked);
}

function cellClicked(event) {
    var cell = event.target;
    var cellIndex = parseInt(cell.id.split("-")[1]) - 1;
    if (board[cellIndex] === 0) { // Only allow a move if the cell is empty
        cell.innerHTML = currentPlayer;
        board[cellIndex] = currentPlayer;
        checkForWin();
        checkForTie();
        switchPlayer();
    }
}

function checkForWin() {
    // Winning combinations
    var winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (var i = 0; i < winningCombinations.length; i++) {
        var combination = winningCombinations[i];
        if (board[combination[0]] !== 0 &&
            board[combination[0]] === board[combination[1]] &&
            board[combination[1]] === board[combination[2]]) {
            alert(board[combination[0]] + " wins!");
            resetGame();
            return;
        }
    }
}

function checkForTie() {
    var emptyCells = board.indexOf(0);
    if (emptyCells === -1) {
        alert("It's a tie!");
        resetGame();
    }
}

function switchPlayer() {
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
}

function resetGame() {
    currentPlayer = "X";
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 1; i <= 9; i++) {
        var cell = document.getElementById("cell-" + i);
        cell.innerHTML = "";
    }
}


