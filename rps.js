// set the initial scores at 0
let playerScore = 0;
let computerScore = 0;

// define the dynamic DOM elements
const playerChoiceDiv = document.querySelector("#player-choice");
const computerChoiceDiv = document.querySelector("#computer-choice");
const roundOutcomeDiv = document.querySelector("#round-outcome");
const playerScoreDiv = document.querySelector("#player-score");
const computerScoreDiv = document.querySelector("#computer-score");
const scoreboardDiv = document.querySelector("#scoreboard");
const playAgainBtn = document.querySelector("#play-again");
const initialScoreboardDiv = scoreboardDiv.cloneNode(true);


// add events listeners to the buttons pressed by the player
const buttons = Array.from(document.querySelectorAll(".game-btn"));
buttons.forEach(button => button.addEventListener("click", playRound));

// add event listener to the 'play again' button
playAgainBtn.addEventListener("click", resetGame);
function resetGame() {
    computerScore = 0;
    playerScore = 0;
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore
    playAgainBtn.setAttribute("style", "visibility: hidden");
    buttons.forEach(button => button.disabled = false);
    document.querySelector("#final-message").remove();

}

// define the random computer choice
const possibilities = ["rock", "paper", "scissors"];
function computerPlay() {
    return possibilities[Math.round(Math.random() * 2)];
}

// define the generation of player's choice upon click
function playerPlay(e) {
    let choice = e.target.id;
    return (choice);
}

// define the function playing out a single round
function playRound(e) {
    let playerSelection = playerPlay(e);
    let computerSelection = computerPlay();
    let winner = "";
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            winner = "tie";
        } else if (computerSelection == "paper") {
            winner = "computer";
        } else if (computerSelection == "scissors") {
            winner = "player";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            winner = "player";
        } else if (computerSelection == "paper") {
            winner = "tie";
        } else if (computerSelection = "scissors") {
            winner = "computer"
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            winner = "computer";
        } else if (computerSelection == "paper") {
            winner = "player";
        } else if (computerSelection == "scissors") {
            winner = "tie";
        }
    }

    let outcome = "";
    if (winner == "player") {
        outcome = `You won! ${playerSelection} beats ${computerSelection}`
    } else if (winner == "computer") {
        outcome = `You lost! ${computerSelection} beats ${playerSelection}`
    } else if (winner == "tie") {
        outcome = `It's a tie! ${computerSelection} does not beat ${playerSelection}`
    }

    playerChoiceDiv.textContent = `Player selected ${playerSelection}`
    computerChoiceDiv.textContent = `Computer selected ${computerSelection}`
    roundOutcomeDiv.textContent = `${outcome}`;
    updateScore(outcome);

    if (playerScore == 5 || computerScore == 5) {
        let finalMessage = "";
        if (playerScore == 5) {
            finalMessage = "You were the first to get 5 points, you win!"
        } else if (computerScore == 5) {
            finalMessage = "Computer was the first to get 5 points, you lost!"
        }
        buttons.forEach(button => button.disabled = true);
        playAgainBtn.setAttribute("style", "visibility: visible");
        let finalMessageDiv = document.createElement("div");
        finalMessageDiv.setAttribute("id", "final-message")
        finalMessageDiv.textContent = finalMessage; 
        scoreboardDiv.appendChild(finalMessageDiv);
    }
}

// define the score update mechanism
function updateScore(outcome) {
    let finalOutcome = "";
    let singleOutcome = outcome;
    if (singleOutcome.includes("You won")) {
        playerScore++;
    } else if (singleOutcome.includes("You lost")) {
        computerScore++;
    }
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;
}