const possibilities = ["rock", "paper", "scissors"];

function computerPlay() {
    return possibilities[Math.round(Math.random()*2)];
}
const computerSelection = computerPlay();

function playerPlay() {
    let selection = "";
    while(!possibilities.includes(selection)) {
        selection = prompt(`Please type in to select one of the following:
        1) rock
        2) paper
        3) scissors`).toLowerCase()
    }
    return selection
}
const playerSelection = playerPlay();

function playRound(playerSelection, computerSelection) {
    let winner="";    
    let outcome="";
    if(playerSelection=="rock") {
        if(computerSelection=="rock") {
            winner="tie";
        } else if(computerSelection=="paper") {
            winner="computer";
        } else {
            winner="player";
        }
    } else if(playerSelection=="paper") {
        if(computerSelection=="rock") {
            winner="player";
        } else if(computerSelection=="paper") {
            winner="tie";
        } else {
            winner="computer"
        }
    } else if(playerSelection=="scissors") {
        if(computerSelection=="rock") {
            winner="computer";
        } else if(computerSelection=="paper") {
            winner="player";
        } else {
            winner="tie";
        }
    }
    if(winner=="tie") {
        outcome=`It's a tie!`
    } else if(winner="player") {
        outcome=`You win! ${playerSelection} beats ${computerSelection}.`
    } else if(winner="computer") {
        outcome=`>You lose! ${computerSelection} beats ${playerSelection}`
    }
    return outcome
}

function game() {
    let playerScore=0;
    let computerScore=0;
    let finalOutcome="";
    console.log("The game begins!");
    console.log(playerScore);
    while((playerScore<5) && (computerScore<5)) {
    let singleOutcome = playRound(playerSelection, computerSelection);    
        console.log(singleOutcome) 
        console.log(singleOutcome.includes("You win!"))
        if(singleOutcome.includes("You win!") == true) {
            playerScore++;
            singleOutcome = "";
        } else if(singleOutcome.includes("You lose!") == true) {
            computerScore++;
            singleOutcome = "";
        } else if(singleOutcome.includes("It's a tie!") == true) {
            continue;
            singleOutcome = "";
        }
    }
    console.log(playerScore);
    if(playerScore==5) {
        finalOutcome=`You scored ${playerScore} and won against computer, who scored ${computerScore}!`;
    } else if(computerScore==5) {
        finalOutcome=`You scored ${playerScore} and lost against computer, who scored ${computerScore}!`;
    }
    return(finalOutcome);
}

console.log(game())