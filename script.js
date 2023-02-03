let score = 0;

function getComputerChoice(){
    choice_number = Math.floor(Math.random()*3);
    if (choice_number === 0){
        return "rock";
    }
    else if (choice_number === 1){
        return "paper";
    }
    else if (choice_number === 2){
        return "scissors";
    }
}

function playRound(computerSelection, playerSelection){  

    if (computerSelection == "rock" && playerSelection == "paper"){
        score = score + 1;
        return "You Win! Paper beats Rock";
        
    }
    else if (computerSelection == "paper" && playerSelection == "scissors"){
        score = score + 1;
        return "You Win! Scissors beats Paper";
        
    }
    else if (computerSelection == "scissors" && playerSelection == "rock"){
        score = score + 1;
        return "You Win! Rock beats Scissors";
        
    }

    else if (computerSelection == "rock" && playerSelection == "rock"){
        return "Draw! Rock with Rock";
    }    
    else if (computerSelection == "paper" && playerSelection == "paper"){
        return "Draw! Paper with Paper";
    }
    else if (computerSelection == "scissors" && playerSelection == "scissors"){
        return "Draw! Scissors with Scissors";
    }

    else if (computerSelection == "scissors" && playerSelection == "paper"){
       return "You Lose! Scissors beats Paper";
    }
    else if (computerSelection == "rock" && playerSelection == "scissors"){
        return "You Lose! Rock beats Scissors";
    }
    else if (computerSelection == "paper" && playerSelection == "rock"){
        return "You Lose! Paper beats Rock";
    }

    else {
        return "Try Again!";
    }
}

function playGame(){
    for (let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
        playRound();
        console.log(playRound(computerSelection,playerSelection));
        console.log(`Score = ${score}`);
    }
}

playGame();
