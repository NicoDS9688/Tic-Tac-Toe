const cells = document.querySelectorAll(".cells");
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

let currentPlayer = "X";
let gameEnd = false;
let playerXScore = 0;
let playerOScore = 0;
const playerXScoreHolder = document.getElementById("playerXScore");
const playerOScoreHolder = document.getElementById("playerOScore");

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (gameEnd) {
        return;
    }
    if (cell.textContent === "") {
        cell.textContent = currentPlayer;
        if (checkWin()) {
            gameEnd = false;
            alert(`${currentPlayer} is the winner!`);
        if (currentPlayer === "X") {
            playerXScore++;
            playerXScoreHolder.textContent = `SCORE: ${playerXScore}`;
        } else {
            playerOScore++;
            playerOScoreHolder.textContent = `SCORE: ${playerOScore}`;
        }
    } else if (checkTie()) {
        gameEnd = false;
        alert("Excellent game, it's a tie!");
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}
});
});

function checkWin() {
    return winConditions.some(condition => {
        return condition.every(index => {
            return cells[index].textContent === currentPlayer;
    });
});
}

function checkTie() {
    return Array.from(cells).every(cell => {
        return cell.textContent !== "";
});
}

function resetBoard() {
    const cells = document.querySelectorAll(".cells");
    cells.forEach((cell) => {
        cell.textContent = "";
    });
}

function resetGame() {
    location.reload();
}


