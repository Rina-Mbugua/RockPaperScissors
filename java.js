function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 1/3) {
        return "rock"
    } else if (randomNumber < 2/3) {
        return "paper"
    } else {
        return "scissors"
    }
}

let userOption;
let computerOption;

let userScore = 0;
let computerScore = 0;


let roundsPlayed = 0;

function playRound(userOption, computerOption) {

    console.log("Player's Choice: " + userOption);
    console.log("Computer's Choice: " + computerOption);

    let result;

    if (computerOption === "rock") {
        if (userOption === "scissors") {
            result = "You Lose!";
        } else if (userOption === "paper") {
            result = "You Win!";
        } else {
           result = "It's a draw!";
        }
    } else if (computerOption === "scissors") {
        if (userOption === "rock") {
            result = "You Win!";
        } else if (userOption === "paper") {
            result = "You Lose!";
        } else {
            result = "It's a draw!";
        }
    } else if (computerOption === "paper") {
        if (userOption === "rock") {
            result = "You Lose!";
        } else if (userOption === "scissors") {
            result = "You Win!";
        } else {
            result = "It's a draw";
        }
    }

    const roundWinner = document.createElement('div');
        roundWinner.textContent = result;

    const container = document.getElementById('resultContainer')
    container.appendChild(roundWinner)

    console.log("Result: " + result);

    roundsPlayed++;
    if (roundsPlayed === 5) {
        console.log("Game Over!")
    }


 if (result === "You Win!") {
    userScore++
 } else if (result === "You Lose!") {
    computerScore++
 }

 console.log(`Scores after Round ${roundsPlayed}: You - ${userScore} | Computer - ${computerScore}`)

 const runningScoreUser = document.createElement('div');
    runningScoreUser.textContent = `Scores after Round ${roundsPlayed}: You - ${userScore} | Computer - ${computerScore}`

const scoreDiv = document.getElementById('scores')
 scoreDiv.appendChild(runningScoreUser)

}




const rockBtn = document.getElementById('rock-Btn');
    rockBtn.addEventListener('click', () => playRound("rock", getComputerChoice()));

const paperBtn = document.getElementById('paper-Btn');
    paperBtn.addEventListener('click', () => playRound("paper", getComputerChoice()));

const scissorsBtn = document.getElementById('scissors-Btn');
    scissorsBtn.addEventListener('click', () => playRound("scissors", getComputerChoice()));