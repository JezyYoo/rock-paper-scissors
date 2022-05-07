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
    // switch(playerSelection){
    //     case "ROCK"
    // }
    
    // return "You Lose! Paper beats Rock"
}

console.log(computerPlay())

let playerScore = 0;
let computerScore = 0;
const game = function(){
    for (let i = 0; i < 5; i++) {
        let playerSelection  = prompt("Rock, Paper or Scissors?").toUpperCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
    }
}