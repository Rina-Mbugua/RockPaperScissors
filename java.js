function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 1/3) {
        return "Rock"
    } else if (randomNumber < 2/3) {
        return "Paper"
    } else {
        return "scissors"
    }
}

const selectedOption = getComputerChoice();
console.log("Selected Option:", selectedOption)

function playSelection() {
    const userInput = prompt("Select an option: Rock, Paper or Scissors");

    if (userInput === "Rock") {
        return "You selected Rock!";
    } else if (userInput === "Paper") {
        return "You selected Paper!";
    } else if (userInput === "Scissors") {
        return "You selected Scissors!";
    } else {
        return "Invalid input. Please select Rock, Paper or Scissors";
    }
}

const userOption = playSelection();
console.log("You selected:", userOption)