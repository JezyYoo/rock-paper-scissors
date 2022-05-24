let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll("button");
let rounds = document.querySelector(".rounds");
let player = document.querySelector(".player");
let computer = document.querySelector(".computer");
let winner = document.querySelector(".winner");
let playerTotal = document.querySelector('.playerTotal');
let computerTotal = document.querySelector('.computerTotal');
let roundsCount = 0;

const getRoundInfo = function(round,pl,comp){
    rounds.textContent = "Round: " + round;
    player.textContent = "Player: " + pl;
    computer.textContent = "Computer: " + comp;

    
}
const getRoundScoreInfo = function(plTotal,compTotal){
    playerTotal.textContent = "Player Total:" + plTotal;
    computerTotal.textContent = "Computer Total: " + compTotal;
    console.log(plTotal,compTotal)
}

const getRndInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

const computerPlay = function(){
    const res = getRndInteger(1,3);

    switch(res){
        case 1:
            return "ROCK";
        case 2:
            return "PAPER"
        case 3:
            return "SCISSORS"
    }
    // return ‘Rock’, ‘Paper’ or ‘Scissors’.;
}

const playRound = function(playerSelection){
    if(playerScore == 3 || computerScore == 3)
    {
        getWinner(playerScore,computerScore);
        if(tryAgainResult)
        {
            cleanScore();
        }
    }
    roundsCount++;
    let computerSelection = computerPlay();
    getRoundInfo(roundsCount,playerSelection,computerSelection);

    switch(playerSelection){
        case "ROCK":
            if(computerSelection == "ROCK")
            {
                winner.textContent = "Draw! Rock and Rock";
            }
            else if(computerSelection == "SCISSORS")
            {
                winner.textContent ="You Win! Rock beats Scissors";
                playerScore++;
            }
            else if(computerSelection == "PAPER")
            {
                winner.textContent = "You Lose! Paper beats Rock";
                computerScore++;
            }

        case "PAPER":
            if(computerSelection == "PAPER")
            {
                winner.textContent = "Draw! Paper and Paper";
            }
            else if(computerSelection == "ROCK")
            {
                winner.textContent = "You Win! Paper beats Rock";
                playerScore++;
            }
            else if(computerSelection == "SCISSORS")
            {
                winner.textContent = "You lose! Scissors beats Paper";
                computerScore++;
            }

        case "SCISSORS":
            if(computerSelection == "SCISSORS")
            {
                winner.textContent = "Draw! Scissors and Scissors";
            }
            else if(computerSelection == "PAPER")
            {
                winner.textContent = "You Win! Scissors beats Paper";
                playerScore++;
            }
            else if(computerSelection == "ROCK")
            {
                winner.textContent = "You lose! Rock beats Scissors";
                computerScore++;
            }
    }
    getRoundScoreInfo(playerScore,computerScore);
    
}

buttons.forEach(button => {
    let playerChoice = button.textContent.toUpperCase();
    button.addEventListener('click',()=> playRound(playerChoice))
});



const getWinner = function(playerScore,computerScore){
    if(playerScore > computerScore)
        return confirm("Congratulations! You Win!\n\nDo you want to try again?");
    else if(playerScore < computerScore)
        return confirm("Unfortunately, Computer Win\n\nDo you want to try again?",'background: rgb(239, 10, 10);color:white');
    else
        return confirm("it's a Draw!\n\nDo you want to try again?");

}
const cleanScore = function(){
    playerScore = 0;
    computerScore = 0;
}

// const game = function(){
//     for (let i = 1; i <= 3; i++) {
//         console.log("%c--------------------------------------------------------",'background:rgb(0, 0, 0)');
//         // let playerSelection  = prompt("Rock, Paper or Scissors?").toUpperCase();
//         // let computerSelection = computerPlay();
//         getRoundInfo(i,playerSelection,computerSelection);
//         playRound(playerSelection,computerSelection);
//         console.log(`Score\nYou: ${playerScore} Computer: ${computerScore}`);
//     }
//     let tryAgainResult = getWinner(playerScore,computerScore);
//     if(tryAgainResult)
//     {
//         cleanScore();
//         game();
//     }
// }

// game();
