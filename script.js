// getComputerChoice()
// randomly returns rock, paper, or scissors
function getComputerChoice() {
    const choices = [
        "rock",
        "paper",
        "scissors"
    ];
    const randIndex = Math.floor(Math.random() * 3);
    return choices[randIndex];
}

// getPlayerChoice()
// prompt for selection. 
// convert to lowercase. 
// Verify that input is valid, otherwise re-prompt
function getPlayerChoice() {
    const VALID_CHOICES = [
        "rock",
        "paper",
        "scissors"
    ];
    let userInput = prompt("Enter your choice").toLowerCase();
    let keepGoing = true;
    while (keepGoing) {
        if (VALID_CHOICES.includes(userInput)) {
            return userInput;
        } else {
            userInput = prompt(
                "Invalid response. Please enter rock, paper, or scissors"
            ).toLowerCase();
        }
    }
}

// playRound(playerSelection, computerSelection) -> String declaring the winner "You lose! Paper beats rock"
function playRound(playerSelection, computerSelection) {
    const KEY_BEATS_VAL = {
        "scissors": "paper",
        "paper": "rock",
        "rock": "scissors"
    };
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (computerSelection === KEY_BEATS_VAL[playerSelection]) {
        playerSelection = playerSelection.replace(
            playerSelection.charAt(0),
            playerSelection.charAt(0).toUpperCase());
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerSelection = computerSelection.replace(
            computerSelection.charAt(0),
            computerSelection.charAt(0).toUpperCase());
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// game()
// Play 5 rounds and log results
function game() {
    console.log("Welcome to Rock, Paper, Scissors");
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
    console.log("Thank you for playing");
}

game();
