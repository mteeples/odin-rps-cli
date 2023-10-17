// getComputerChoice()
// randomly returns rock, paper, or scissors

// playRound(playerSelection, computerSelection) -> String declaring the winner "You lose! Paper beats rock"
function playRound() {
    return "You lose! Paper beats Rock";
}

// game()
// Play 5 rounds and log results
function game() {
    console.log("Welcome to Rock, Paper, Scissors");
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
    console.log("Thank you for playing");
}

game();
