// Skoori variables
let playerScore = 0;
let computerScore = 0;
// Algavad DOM variables : Variable et player ja computer skoorid lehel muutuksid. Elemendi võtab html-st
const playerScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
// DOM Variable for the Scoreboard div.
const scoreBoard_div = document.querySelector(".scoreboard");
// DOM Variable for the Result div
const result_div = document.querySelector(".result");
// DOM Variables for rock, paper, scissor
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
// now we have stored all the necessary variables for the future in one place.

// Created a function game. Our game takes user input, if player/computer picks Rock/Paper/scissors
// then we know it. 


function computerChoice() {
    //                Over here is choices array
    const choices = ["Rock", "Paper" , "Scissors"];
    // To get a random element fromt he choices array we use builtin object called math.random
    // Math.random returns a random number between 0-1.
    // We want random number from 0-3 so we are adding *3 (times 3)
    // We also want to round that number, we do that with the method Math.floor
    const randomNumber = (Math.floor(Math.random() * 3 ));
    return choices[randomNumber];
}

function wins(player, computer) {
    // Everytime when player wins it will increase its score by one
    playerScore++;
    // When ever we win we would like to show it on the page
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = player + " Wins " + computer + ". You win!🔥 ";
}

function lose(computer, player) {
    computerScore++;
    // When computer win we would like to show it on the page
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = player + " Loses To " + computer + ". Cry A River!💩 ";
}

function draw(player, computer) {
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = player + " Draws With " + computer + ". Boooring...🤔 ";
}

function game(playerChoice) {
    const getComputerChoice = computerChoice();
    
    switch (playerChoice + getComputerChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            wins(playerChoice, getComputerChoice);
            break;  
        case "RockPaper" :
        case "PaperScissors" :
        case "ScissorsRock" :
            lose(playerChoice, getComputerChoice);
            break;
        case "RockRock" :
        case "PaperPaper" :
        case "ScissorsScissors" :
            draw(playerChoice, getComputerChoice);
            break;  
    }

      
}


function main() {
    rock_div.addEventListener("click", function() {
        game("Rock")
    })

    paper_div.addEventListener("click", function() {
        game("Paper")
    })

    scissors_div.addEventListener("click", function() {
        game("Scissors")
})
}

main();