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

const selectedOption = getComputerChoice();
console.log("Selected Option:", selectedOption)

function playSelection() {
    const userOption = prompt("Select an option: Rock, Paper or Scissors").toLowerCase(); //Convert to lowercase. userOption is the prompt that will contain the user's answer  
    const validOptions = ["rock", "paper", "scissors"]; // Valid options in lowercase .validOption is the array that contains the valid options

    if (validOptions.includes(userOption)) { // if the the option the user selected is INCLUDED in the array.
        const userInput = userOption.charAt(0).toUpperCase() + userOption.slice(1); // Retreive the character which is the 0th index (The first character always starts at zero) and capitalize it ending at the 1st index (which is the second character)
        return { message: `You selected ${userInput}!`, option: userOption}; // we are using the `` backticks here because it is a template literal. This allows for multiline stings, string interpolation with embedded expressions and special constructs. In this case we are creating a string by doing a substitution of a placeholder, which is a nother variable in out case.
    }   else {
        return { message:"Invalid input. Please select Rock, Paper or Scissors.", option: null}
    }
}
const { message, option: userOption } = playSelection();
console.log(message);


function determineWinner(userOption, selectedOption) {
    if (selectedOption === "rock") {
        if (userOption === "scissors") {
            return "You lose!";
        } else if (userOption === "paper") {
            return "You win!";
        } else {
            return "It's a draw!";
        }
    } else if (selectedOption === "scissors") {
        if (userOption === "rock") {
            return "You win!";
        } else if (userOption === "paper") {
            return "You lose!";
        } else {
            return "It's a draw!";
        }
    } else if (selectedOption === "paper") {
        if (userOption === "rock") {
            return "You win!";
        } else if (userOption === "scissors") {
            return "You lose!";
        } else {
            return "It's a draw"
        }
    }
}

const winnerMessage = determineWinner(userOption, selectedOption);
console.log(winnerMessage);