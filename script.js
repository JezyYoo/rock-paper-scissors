let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll("button");
let playerInfo = document.querySelector('.player');
let computerInfo = document.querySelector('.computer');
let roundInfo = document.querySelector('.round');
let infoBlock = document.querySelector('.info');
let roundsCount = 0;

buttons.forEach(button => {
    let playerChoice = button.textContent.toUpperCase();
    button.addEventListener('click',()=> playRound(playerChoice))
});

const getRoundInfo = function(round,player,computer){
    console.log(`Round: ${round}`);
    console.log("Player: " + player);
    console.log("Computer: " + computer);
}
    
const getScoreInfo = function(rnd,plScore,compScore){
    roundInfo.textContent = "Round: " + rnd;
    playerInfo.textContent = "Player: " + plScore;
    computerInfo.textContent = "Computer: " + compScore;

    if(plScore == 3 || compScore == 3)
    {
        let choice = getWinner(plScore,compScore);
        if(choice)
            cleanScore();
    }
}

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
    roundsCount = 0;
    console.clear()
    infoBlock.textContent = "Lets Begin!";
    roundInfo.textContent = "";
    playerInfo.textContent = "";
    computerInfo.textContent = "";
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
    roundsCount++;
    let computerSelection = computerPlay();
    getRoundInfo(roundsCount,playerSelection,computerSelection);

    switch(playerSelection){
        case "ROCK":
            if(computerSelection == "ROCK")
            {
                infoBlock.textContent = "Draw! Rock and Rock"
                getScoreInfo(roundsCount,playerScore,computerScore);
                return console.log("%cDraw! Rock and Rock","background:rgb(167, 167, 1);color:white");
            }
            else if(computerSelection == "SCISSORS")
            {
                infoBlock.textContent = "You Win! Rock beats Scissors"
                playerScore++;
                getScoreInfo(roundsCount,playerScore,computerScore);
                return console.log("%cYou Win! Rock beats Scissors","background: rgb(74, 225, 9);color:white");
            }
            else if(computerSelection == "PAPER")
            {
                infoBlock.textContent = "You Lose! Paper beats Rock";
                computerScore++;
                getScoreInfo(roundsCount,playerScore,computerScore);
                return console.log("%cYou Lose! Paper beats Rock",'background: rgb(239, 10, 10);color:white');
            }

        case "PAPER":
            if(computerSelection == "PAPER")
            {
                infoBlock.textContent = "Draw! Paper and Paper";
                getScoreInfo(roundsCount,playerScore,computerScore);
                return console.log("%cDraw! Paper and Paper","background:rgb(167, 167, 1);color:white");
            }
            else if(computerSelection == "ROCK")
            {
                infoBlock.textContent ="You Win! Paper beats Rock"
                playerScore++;
                getScoreInfo(roundsCount,playerScore,computerScore);
                return console.log("%cYou Win! Paper beats Rock","background: rgb(74, 225, 9);color:white");
            }
            else if(computerSelection == "SCISSORS")
            {
                infoBlock.textContent = "You lose! Scissors beats Paper"
                computerScore++;
                getScoreInfo(roundsCount,playerScore,computerScore);
                return console.log("%cYou lose! Scissors beats Paper",'background: rgb(239, 10, 10);color:white');
            }

        case "SCISSORS":
            if(computerSelection == "SCISSORS")
            {
                infoBlock.textContent = "Draw! Scissors and Scissors"
                getScoreInfo(roundsCount,playerScore,computerScore);
                return console.log("%cDraw! Scissors and Scissors","background:rgb(167, 167, 1);color:white");
            }
            else if(computerSelection == "PAPER")
            {
                infoBlock.textContent = "You Win! Scissors beats Paper"
                playerScore++;
                getScoreInfo(roundsCount,playerScore,computerScore);
                return console.log("%cYou Win! Scissors beats Paper","background: rgb(74, 225, 9);color:white");
            }
            else if(computerSelection == "ROCK")
            {
                infoBlock.textContent = "You lose! Rock beats Scissors"
                computerScore++;
                getScoreInfo(roundsCount,playerScore,computerScore);
                return console.log("%cYou lose! Rock beats Scissors",'background: rgb(239, 10, 10);color:white');        
            }
    }
    
}

