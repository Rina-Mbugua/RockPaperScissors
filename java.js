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


let userScore = 0;
let computerScore = 0;


    //Get computer's choice 
    const computerOption = getComputerChoice();
    console.log("Computer's Choice:", computerOption)

    // Get user's choice
    function playSelection() {
        let userOption;

        const rockBtn = document.getElementById('rock-Btn');
        rockBtn.addEventListener('click', () => {
            const userOption = "rock";
            console.log("Button clicked. Output: " + userOption);
        });
    
    const paperBtn = document.getElementById('paper-Btn');
        paperBtn.addEventListener('click', () => {
            const userOption = "paper";
            console.log("Button clicked. Output: " + userOption);
        });
    
    const scissorsBtn = document.getElementById('scissors-Btn')
        scissorsBtn.addEventListener('click', () => {
            const userOption = "scissors"
            console.log("Button clicked. Output: " + userOption);
        }); 

        const validOptions = ["rock", "paper", "scissors"]; // Valid options in lowercase .validOption is the array that contains the valid options
    
        if (validOptions.includes(userOption)) { // if the the option the user selected is INCLUDED in the array.
            const userInput = userOption.charAt(0).toUpperCase() + userOption.slice(1); // Retreive the character which is the 0th index (The first character always starts at zero) and capitalize it ending at the 1st index (which is the second character)
            return { message: `You selected ${userInput}!`, option: userOption}; // we are using the `` backticks here because it is a template literal. This allows for multiline stings, string interpolation with embedded expressions and special constructs. In this case we are creating a string by doing a substitution of a placeholder, which is a nother variable in out case.
        }   else {
            return { message:"Invalid input. Please select Rock, Paper or Scissors.", option: null}
        }
    }

    //Determine Winner    
    function playRound(userOption, computerOption) {
        if (computerOption === "rock") {
            if (userOption === "scissors") {
                return "You Lose!";
            } else if (userOption === "paper") {
                return "You Win!";
            } else {
                return "It's a draw!";
            }
        } else if (computerOption === "scissors") {
            if (userOption === "rock") {
                return "You Win!";
            } else if (userOption === "paper") {
                return "You Lose!";
            } else {
                return "It's a draw!";
            }
        } else if (computerOption === "paper") {
            if (userOption === "rock") {
                return "You Lose!";
            } else if (userOption === "scissors") {
                return "You Win!";
            } else {
                return "It's a draw";
            }
        }
    }

    const { message, option: userOption } = playSelection();
    console.log(message);

    const roundWinner = playRound(userOption, computerOption);
    console.log(`Round ${round} Winner: ${roundWinner}`);
    
    if (roundWinner === "You Win!") {
        userScore++;
    } else if (roundWinner === "You Lose!") {
        computerScore++;
    }

    console.log(`Scores after Round ${round}: You - ${userScore} | Computer - ${computerScore}`);


console.log("Final Scores:");
console.log(`You: ${userScore} | Computer: ${computerScore}`);