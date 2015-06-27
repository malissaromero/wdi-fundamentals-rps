////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var move;
    var move || getInput();
    return move;
}

function getComputerMove(move) {
    var move;
    var move || randomPlay();
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;

        if (playerMove === computerMove) {
            console.log (winner = "tie");
        } else if (playerMove === "rock" && computerMove === "scissors") {
            console.log (winner = playerMove);
        } else if (playerMove === "scissors" && computerMove === "paper") {
            console.log (winner = playerMove);   
        } else if (playermove === "paper" && computerMove === "rock") {
            console.log (winner = playerMove);
        } else if (computerMove === "rock" && playerMove === "scissors") {
            console.log (winner = computerMove);
        } else if (computerMove === "scissors" && playerMove === "paper") {
            console.log (winner = computerMove);   
        } else if (computermove ==y= "paper" && playerMove === "rock") {
            console.log (winner = computerMove);
        return winner;
}

function playToFive(playerWins,computerWins) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
 
    while (playerWins < 5 && computerWins < 5) {
     if (getWinner() === "player") {
         playerWins ++;
     } else if (getWinner() === "computer") {
         computerWins ++;
     } 
     console.log ("You chose "+ [playerMove] + "while computer chose "+ [computerMove]);
     console.log ("The winner is "+ getWinner());
     console.log ("The score is currently " +playerWins+ "to" +computerWins); {

     }return [playerWins, computerWins];
    playtoFive();
 }

