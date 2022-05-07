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

                return "Draw! Rock and Rock";
            }
            else if(computerSelection == "SCISSORS")
            {
                playerScore++;
                return "You Win! Rock beats Scissors";
            }
            else if(computerSelection == "PAPER")
            {
                computerScore++;
                return "You lose! Paper beats Rock";
            }

        case "PAPER":
            if(computerSelection == "PAPER")
            {

                return "Draw! Paper and Paper";
            }
            else if(computerSelection == "ROCK")
            {
                playerScore++;
                return "You Win! Paper beats Rock";
            }
            else if(computerSelection == "SCISSORS")
            {
                computerScore++;
                return "You lose! Scissors beats Paper";
            }

        case "SCISSORS":
            if(computerSelection == "SCISSORS")
            {

                return "Draw! Scissors and Scissors";
            }
            else if(computerSelection == "PAPER")
            {
                playerScore++;
                return "You Win! Scissors beats Paper";
            }
            else if(computerSelection == "ROCK")
            {
                computerScore++;
                return "You lose! Rock beats Scissors";        
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
        return alert("Congratulations! You Win!");
    else if(playerScore < computerScore)
        return alert("Unfortunately, Computer Win");
    else
        return alert("it's a Draw!");

}


const game = function(){
    for (let i = 1; i <= 3; i++) {
        let playerSelection  = prompt("Rock, Paper or Scissors?").toUpperCase();
        let computerSelection = computerPlay();
        getRoundInfo(i,playerSelection,computerSelection);
        console.log(playRound(playerSelection,computerSelection));
        console.log(`Score\nYou: ${playerScore} Computer: ${computerScore}`);
    }
    getWinner(playerScore,computerScore);

}

game();