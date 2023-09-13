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

    //Determine Winner logic
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

    //user & and computer selection
        const rockBtn = document.getElementById('rock-Btn');
        rockBtn.addEventListener('click', () => {
            userOption = "rock";
            computerOption = getComputerChoice();
            console.log("Player's Choice: " + userOption);
            console.log("Computer's Choice: " + computerOption);
            const result = playRound(userOption, computerOption);
            console.log(result)
        });
    
    const paperBtn = document.getElementById('paper-Btn');
        paperBtn.addEventListener('click', () => {
            userOption = "paper";
            computerOption = getComputerChoice();
            console.log("Player's Choice: " + userOption);
            console.log("Computer's Choice: " + computerOption);
            const result = playRound(userOption, computerOption);
            console.log(result)
        });
    
    const scissorsBtn = document.getElementById('scissors-Btn')
        scissorsBtn.addEventListener('click', () => {
            userOption = "scissors";
            computerOption = getComputerChoice();
            console.log("Player's Choice: " + userOption);
            console.log("Computer's Choice: " + computerOption);
            const result = playRound(userOption, computerOption);
            console.log(result)
        }); 

//let userScore = 0;
//let computerScore = 0;


    
    
    

    
  
    

   // const { message, option: userOption } = playSelection();
   // console.log(message);

   // const roundWinner = playRound(userOption, computerOption);
    //console.log(`Round ${round} Winner: ${roundWinner}`);
    
   //if (roundWinner === "You Win!") {
   //     userScore++;
   // } else if (roundWinner === "You Lose!") {
   //     computerScore++;
  //  }

   // console.log(`Scores after Round ${round}: You - ${userScore} | Computer - ${computerScore}`);


//console.log("Final Scores:");
//console.log(`You: ${userScore} | Computer: ${computerScore}`);