// getComputerChoice()
// randomly returns rock, paper, or scissors

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
            ).toLowerCase()
        }
    }
}

// playRound(playerSelection, computerSelection) -> String declaring the winner "You lose! Paper beats rock"
function playRound(playerSelection, computerSelection) {
    return "You lose! Paper beats Rock";
}

// game()
// Play 5 rounds and log results
function game() {
    console.log("Welcome to Rock, Paper, Scissors");
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), "rock"));
    }
    console.log("Thank you for playing");
}

game();
