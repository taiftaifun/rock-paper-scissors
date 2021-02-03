const possibilities = ["rock", "paper", "scissors"];
const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach(button => button.addEventListener("click", playerPlay));

function computerPlay() {
    return possibilities[Math.round(Math.random()*2)];
}

function playerPlay(e) {
    return(e.target.id);
}

/*
function playRound() {
    let playerSelection=playerPlay();
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
    console.log(outcome);
    return outcome;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let singleOutcome = "";
    let finalOutcome = "";
    while((playerScore<5) && (computerScore<5)) {
        singleOutcome = playRound();
        if(singleOutcome.includes("You won")) {
            playerScore++;
        } else if(singleOutcome.includes("You lost")) {
            computerScore++;
        }
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
        console.log("--------------------------------")
    }
    if(playerScore==5) {
        finalOutcome="You were the first to get 5 points. You win!";
    } else if(computerScore==5) {
        finalOutcome="Computer was the first to get 5 points. You lose!";
    }
    return finalOutcome;
}
*/