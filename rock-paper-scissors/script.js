const decisions = ["Rock","Paper", "Scissors"]
function getComputerChoice() {
    const choices = decisions [Math.floor(Math.random()*3)]
    return choices;
}



//section is for deciding the winner based on results
function checkWinner(playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
return "Tie"}


    else if 
        (playerSelection === "Scissors" && computerSelection === "Paper"){
        return "Player wins! Scissors beats paper!"
    }

    else if 
        (playerSelection === "Paper" && computerSelection === "Scissors" ) {
            return "Computer wins! Scissors beats paper!"
        }

    else if
        (playerSelection === "Paper" && computerSelection === "Rock") {
        return "Player wins! Paper beats rock!"}

    else if 
        (playerSelection === "Rock" && computerSelection === "Paper") {
        return "Computer wins! Paper beats rock!"
        }
    else if 
        (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "Player wins! Rock beats scissors!"}
    else if 
        (playerSelection === "Scissors" && computerSelection === "Rock") {
            return "Computer wins! Rock beats scissors!"
        }
    }

 //section is for the turns, results and what'll be said
 function playRound(playerSelection, computerSelection) {
 const results = checkWinner(playerSelection, computerSelection);
 if (results == "Tie") {
 return "It's a tie!"}

    else if 
        
        (results == "Player") {
            return "Player wins!"}

        

        else 
            (results == "Computer"); {
                return "Computer Wins"}

            }


 //section for getting the  for the player and the prompt
 function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) { 
    const choice = prompt("Rock Paper and Scissors");
    if (choice == null) {
        continue;
    }
    const choiceInLower = choice.toLowerCase();
    if(options.includes(choiceInLower)) {
        validatedInput = true;
        return choiceInLower;
    }
    
    
 }

}
// initiating the game and to allow the game to work

function game() {
    let playerScore=0;
    let computerScore=0;
    for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice;
    const computerSelection = getComputerChoice;
    console.log(playRound(playerSelection, computerSelection));
    }
    if(checkWinner(playerSelection, computerSelection)=playerScore)
        playerscore++
    else (checkWinner(playerSelection, computerSelection)=computerScore)
        computerScore++
    console.log("Game Over")
    if(playerScore > computerScore)
        console.log("Player is the winner")
    else (playerScore < computerScore)
        console.log("Computer is the winner")
}

game();