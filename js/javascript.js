function getComputerChoice() {
    const compChoice = Math.floor(Math.random() * 3);
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
    const player = prompt("Rock, Scissors, or Paper?", "Rock");
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

function runGame() {
    const C = getComputerChoice();
    const P = getPlayerChoice();

    if (C == P) {
        console.log("Tie!")
    } else if (C == 2 && P == 0) {
        console.log("Computer Wins")
    } else if (C == 0 && P == 2) {
        console.log("Player Wins")
    } else if (C < P) {
        console.log("Computer Wins")
    } else {
        console.log("Player Wins")
    }

}

runGame();
