const choices = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;
let gameLength = 5;
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)
    return choices[choice]
}

// console.log(choices);
// console.log(getComputerChoice())

function getPlayerChoice() {
    let playerInput = prompt("Write down your weapon!")

    if (!choices.includes(playerInput.toLowerCase())) {
        console.log(playerInput + " Not allowed!")
        return getPlayerChoice()
    }
    console.log("Player chooses: " + playerInput)

    return playerInput.toLowerCase()
}

// getPlayerChoice()

function fight(playerChoice, computerChoice) {
    if (playerChoice===computerChoice) {
        console.log("Tie!")
    } else if (playerChoice == "rock" && computerChoice == 'scissors') {
        playerScore++;
        console.log("You Win!")
    } else if (playerChoice == "scissors" && computerChoice == 'paper') {
        playerScore++;
        console.log("You Win!")
    } else if (playerChoice == "paper" && computerChoice == 'rock') {
        playerScore++;
        console.log("You Win!")
    } else {
        computerScore++;
        console.log("You Loose :(")
    }
}

function game() {
    for (let i = 0; i < gameLength; i++) {
        const computerChoice = getComputerChoice()
        const playerChoice = getPlayerChoice()
        console.log("Computer choose: " + computerChoice)
        fight(playerChoice, computerChoice)
    }
    if (playerScore > computerScore) {
        playerScore = 0;
        computerScore = 0;
        console.log("You Beat The Computer! :)")
    } else if (playerScore < computerScore) {
        playerScore = 0;
        computerScore = 0;
        console.log("You Lost against The Computer! :(")
    } else {
        playerScore = 0;
        computerScore = 0;
        console.log("You Tied against The Computer! :/")
    }
}

game()