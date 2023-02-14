const playerSelectionText = document.querySelector("#player-selection-text");
const computerSelectionText = document.querySelector("#computer-selection-text");
const playerScoreText = document.querySelector("#player-score-text");
const computerScoreText = document.querySelector("#computer-score-text");
const roundResultText = document.querySelector("#round-result-text");
const gameResultText = document.querySelector("#game-result-text");
const choiceBtns = document.querySelectorAll(".choiceBtn");

playerSelectionText.style.color = "yellow";
computerSelectionText.style.color = "red";

let options = ["rock", "paper", "scissors"];
let player;
let computer;
let result;
let roundWinner = '';

let playerScore = 0;
let computerScore = 0;
const roundLimit = 5;

function computerTurn() {
    computer = options[Math.floor(Math.random() * options.length)];
}

function getRoundWinner() {
    if (player === computer) {
        return "Draw";
    } else if (computer === "rock") {
        return (player === "paper") ? "You win this round!" : "You lose this round!";
    } else if (computer === "paper") {
        return (player === "scissors") ? "You win this round!" : "You lose this round!";
    } else if (computer === "scissors") {
        return (player === "rock") ? "You win this round!" : "You lose this round!";
    }
}
function updateScore() {
    if(roundResultText.textContent === "You win this round!") {
        playerScore++;
    } else if(roundResultText.textContent === "You lose this round!") {
        computerScore++;
    }
    playerScoreText.textContent = "" + playerScore;
    computerScoreText.textContent = "" + computerScore;
}

function playRound(btn) {
    gameResultText.textContent = "";
    player = btn.value;
    console.log(btn.value)
    computerTurn();
    playerSelectionText.textContent = "You picked: " + player.toUpperCase();
    computerSelectionText.textContent = "Computer picked: " + computer.toUpperCase();
    roundResultText.textContent = getRoundWinner();
    updateScore();
}

choiceBtns.forEach(btn => btn.addEventListener("click", function () {
    playRound(btn);
    if(playerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        gameResultText.textContent = "You won the game!";
    }

    if(computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        gameResultText.textContent = "You lost the game!";

    }
}))
