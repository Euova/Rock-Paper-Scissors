let playerScore = 0;
let computerScore = 0;
const restartBtn = document.querySelector(".restart");    
const pScore = document.querySelector(".pScore");
const cScore = document.querySelector(".cScore"); 
const showDecision = document.querySelector(".decision");
const showStatus = document.querySelector(".status")
const buttons = document.querySelectorAll('button');    
const overlay = document.querySelector(".overlay");    
const restartBox = document.querySelector(".endBox");
const result = document.querySelector(".result");
const playerChoice = document.querySelector(".playerChoice");
const computerChoice = document.querySelector(".computerChoice");

buttons.forEach(button => button.addEventListener('click',function(e){
    const playerSelection = e.target.className;
    const computerSelection = getComputerChoice();   
    playRound(computerSelection,playerSelection);
    pScore.textContent = `Player:  ${playerScore}`;
    cScore.textContent = `Computer: ${computerScore}`;  
    
    if (computerScore == 5){
        overlay.style.cssText = "display: flex; justify-content: center; align-items: center;";
        restartBox.style.cssText = "display: block;";
        result.textContent = "You Lost!";
        restartBtn.addEventListener('click',restartGame);
    }

    else if (playerScore == 5){
        overlay.style.cssText = "display: flex; justify-content: center; align-items: center;";
        restartBox.style.cssText = "display: block;";
        result.textContent = "You Won!";
        restartBtn.addEventListener('click',restartGame);

    }
}));

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
        playerChoice.textContent = "✋";
        computerChoice.textContent = "✊";
        playerScore++;
        showDecision.textContent = "You Win!";
        showStatus.textContent = "Paper beats Rock";

        // return "You Win! Paper beats Rock";
        
    }
    else if (computerSelection == "paper" && playerSelection == "scissors"){
        playerChoice.textContent = "✌";
        computerChoice.textContent = "✋";
        playerScore++;
        showDecision.textContent = "You Win!";
        showStatus.textContent = "Scissors beats Paper";
        // return "You Win! Scissors beats Paper";
        
    }
    else if (computerSelection == "scissors" && playerSelection == "rock"){
        playerChoice.textContent = "✊";
        computerChoice.textContent = "✌";
        playerScore++;
        showDecision.textContent = "You Win!";
        showStatus.textContent = "Rock beats Scissors";
        // return "You Win! Rock beats Scissors";
        
    }

    else if (computerSelection == "rock" && playerSelection == "rock"){
        playerChoice.textContent = "✊";
        computerChoice.textContent = "✊";
        showDecision.textContent = "Draw!";
        showStatus.textContent  = "Rock with Rock";
        // return "Draw! Rock with Rock";
    }    
    else if (computerSelection == "paper" && playerSelection == "paper"){
        playerChoice.textContent = "✋";
        computerChoice.textContent = "✋";
        showDecision.textContent = "Draw!";
        showStatus.textContent  = "Paper with Paper";
        // return "Draw! Paper with Paper";
    }
    else if (computerSelection == "scissors" && playerSelection == "scissors"){
        playerChoice.textContent = "✌";
        computerChoice.textContent = "✌";
        showDecision.textContent = "Draw!";
        showStatus.textContent  = "Scissors with Scissors";
        // return "Draw! Scissors with Scissors";
    }

    else if (computerSelection == "scissors" && playerSelection == "paper"){
        playerChoice.textContent = "✋";
        computerChoice.textContent = "✌";
        computerScore++;
        showDecision.textContent = "You Lose!";
        showStatus.textContent  = "Paper beaten by Scissors";
        // return "You Lose! Scissors beats Paper";
    }
    else if (computerSelection == "rock" && playerSelection == "scissors"){
        playerChoice.textContent = "✌";
        computerChoice.textContent = "✊";
        computerScore++;
        showDecision.textContent = "You Lose!";
        showStatus.textContent  = "Scissors beaten by Rock";
        // return "You Lose! Rock beats Scissors";
    }
    else if (computerSelection == "paper" && playerSelection == "rock"){
        playerChoice.textContent = "✊";
        computerChoice.textContent = "✋";
        computerScore++;
        showDecision.textContent = "You Lose!";
        showStatus.textContent  = "Rock beaten by Paper";
        // return "You Lose! Paper beats Rock";
    }
}

function restartGame(){
    computerScore = 0;
    playerScore = 0;
    overlay.style.cssText = "display: none;";
    pScore.textContent = `Player:  ${playerScore}`;
    cScore.textContent = `Computer: ${computerScore}`;
    showStatus.textContent = "First to 5 points wins!";
    showDecision.textContent = "Rock Paper Scissors";
    playerChoice.textContent = "❔";
    computerChoice.textContent = "❔";
}


