let playerScore = 0;
let computerScore = 0;

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

const playRound =function(playerSelection,computerSelection){
    switch(playerSelection){
        case "ROCK":
            if(computerSelection == "ROCK")
            {

                return console.log("%cDraw! Rock and Rock","background:rgb(167, 167, 1);color:white");
            }
            else if(computerSelection == "SCISSORS")
            {
                playerScore++;
                return console.log("%cYou Win! Rock beats Scissors","background: rgb(74, 225, 9);color:white");
            }
            else if(computerSelection == "PAPER")
            {
                computerScore++;
                return console.log("%cYou Lose! Paper beats Rock",'background: rgb(239, 10, 10);color:white');
            }

        case "PAPER":
            if(computerSelection == "PAPER")
            {

                return console.log("%cDraw! Paper and Paper","background:rgb(167, 167, 1);color:white");
            }
            else if(computerSelection == "ROCK")
            {
                playerScore++;
                return console.log("%cYou Win! Paper beats Rock","background: rgb(74, 225, 9);color:white");
            }
            else if(computerSelection == "SCISSORS")
            {
                computerScore++;
                return console.log("%cYou lose! Scissors beats Paper",'background: rgb(239, 10, 10);color:white');
            }

        case "SCISSORS":
            if(computerSelection == "SCISSORS")
            {

                return console.log("%cDraw! Scissors and Scissors","background:rgb(167, 167, 1);color:white");
            }
            else if(computerSelection == "PAPER")
            {
                playerScore++;
                return console.log("%cYou Win! Scissors beats Paper","background: rgb(74, 225, 9);color:white");
            }
            else if(computerSelection == "ROCK")
            {
                computerScore++;
                return console.log("%cYou lose! Rock beats Scissors",'background: rgb(239, 10, 10);color:white');        
            }
    }
    
    // if(playerSelection === "ROCK" && computerSelection === "ROCK")
    //     return "Draw! Rock and Rock";
}

const getRoundInfo = function(round,player,computer){
    console.log(`Round: ${round}`);
    console.log("Player: " + player);
    console.log("Computer: " + computer);
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
    console.clear()
}

const game = function(){
    for (let i = 1; i <= 3; i++) {
        console.log("%c--------------------------------------------------------",'background:rgb(0, 0, 0)');
        let playerSelection  = prompt("Rock, Paper or Scissors?").toUpperCase();
        let computerSelection = computerPlay();
        getRoundInfo(i,playerSelection,computerSelection);
        playRound(playerSelection,computerSelection);
        console.log(`Score\nYou: ${playerScore} Computer: ${computerScore}`);
    }
    let tryAgainResult = getWinner(playerScore,computerScore);
    if(tryAgainResult)
    {
        cleanScore();
        game();
    }
}

game();
