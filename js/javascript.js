
let pScore = 0;
let cScore = 0;


function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    let comp;

    if (compChoice == 0) {
        comp = "Rock";
    } else if (compChoice == 1) {
        comp = "Scissors";
    } else {
        comp = "Paper";
    }

    console.log("Computer: ", comp);

    return (compChoice);
}


function getPlayerChoice() {
    let player = prompt("Rock, Scissors, or Paper?", "Rock");
    let playerChoice;

    if (player == "Rock") {
        playerChoice = 0;
    } else if (player == "Scissors") {
        playerChoice = 1;
    } else if (player == "Paper") {
        playerChoice = 2;
    } else {
        console.log("Please choose (R)ock, (P)aper, or (S)cissors");
    };

    console.log("Player: ", player);

    return (playerChoice);
}


function scoreKeeper(win) {
    if (win == "P") {
        pScore = pScore + 1;
    } else if (win == "C") {
        cScore = cScore + 1;
    } else {
        console.log("No Winner")
    }

    console.log("Score is: Player:", pScore, " and Computer:", cScore)
}


function runGame() {
    let P = getPlayerChoice();
    let C = getComputerChoice();
    let win;

    if (C == P) {
        console.log("Tie!")
        win = "T";
    } else if (C == 2 && P == 0) {
        console.log("Computer Wins")
        win = "C";
    } else if (C == 0 && P == 2) {
        console.log("Player Wins")
        win = "P";
    } else if (C < P) {
        console.log("Computer Wins")
        win = "C";
    } else {
        console.log("Player Wins")
        win = "P";
    }

    scoreKeeper(win);
}


function gameLoop() {
    runGame();

    let choice = prompt("Play again (Y/N)?", "Y");

    if (choice == "Y") {
        gameLoop();
    } else {
        console.log("Thanks for playing QUITTER")
    }

}

gameLoop();