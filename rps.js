// set the initial scores at 0
let playerScore = 0;
let computerScore = 0;

// define the dynamic DOM elements
let playerChoiceDiv = document.querySelector("#player-choice");
let computerChoiceDiv = document.querySelector("#computer-choice");
let roundOutcomeDiv = document.querySelector("#round-outcome");
let playerScoreDiv = document.querySelector("#player-score");
let computerScoreDiv = document.querySelector("#computer-score");
let scoreboardDiv = document.querySelector("#scoreboard");
// let scoreboardDivInitial = document.querySelector("#scoreboard").innerHTML();

// add events listeners to the buttons pressed by the player
const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach(button => button.addEventListener("click", playRound));

// define the random computer choice
const possibilities = ["rock", "paper", "scissors"];
function computerPlay() {
    return possibilities[Math.round(Math.random()*2)];
}

// define the generation of player's choice upon click
function playerPlay(e) {
    let choice = e.target.id; 
    return(choice);
}

// define the function playing out a single round
function playRound(e) {
    let playerSelection=playerPlay(e);
    let computerSelection=computerPlay();
    console.log(`Player selected ${playerSelection}`);
    console.log(`Computer selected ${computerSelection}`)
    let winner="";    
    if(playerSelection=="rock") {
        if(computerSelection=="rock") {
            winner="tie";
        } else if(computerSelection=="paper") {
            winner="computer";
        } else if(computerSelection=="scissors") {
            winner="player";
        }
    } else if(playerSelection=="paper") {
        if(computerSelection=="rock") {
            winner="player";
        } else if(computerSelection=="paper") {
            winner="tie";
        } else if(computerSelection="scissors") {
            winner="computer"
        }
    } else if(playerSelection=="scissors") {
        if(computerSelection=="rock") {
            winner="computer";
        } else if(computerSelection=="paper") {
            winner="player";
        } else if(computerSelection=="scissors") {
            winner="tie";
        }
    }

    let outcome = "";
    if(winner=="player") {
        outcome=`You won! ${playerSelection} beats ${computerSelection}`
    } else if(winner=="computer") {
        outcome=`You lost! ${computerSelection} beats ${playerSelection}`
    } else if(winner=="tie") {
        outcome=`It's a tie! ${computerSelection} does not beat ${playerSelection}`
    }
    
    playerChoiceDiv.textContent = `Player selected ${playerSelection}`
    computerChoiceDiv.textContent = `Computer selected ${computerSelection}`
    roundOutcomeDiv.textContent = `${outcome}`;
    updateScore(outcome);
    
    // if(playerScore==5) {
    //     scoreboardDiv.textContent = "You were the first to get the 5 points, you win!";
    //     await new Promise(r => setTimeout(r, 2));
    //     computerScore = 0;
    //     playerScore = 0;
    // } else if(computerScore==5) {
    //     scoreboardDiv.textContent = "The computer was the first to get the 5 points, you lose!";
    //     await new Promise(r => setTimeout(r, 2));
    //     scoreboardDiv.innerHTML = scoreboardDivInitial;
    //     computerScore = 0;
    //     playerScore = 0;
    // }
}

// define the score update mechanism
function updateScore(outcome) {
    let finalOutcome = "";
        let singleOutcome = outcome;
        if(singleOutcome.includes("You won")) {
            playerScore++;
        } else if(singleOutcome.includes("You lost")) {
            computerScore++;
        }
        playerScoreDiv.textContent = playerScore;
        computerScoreDiv.textContent = computerScore;
}