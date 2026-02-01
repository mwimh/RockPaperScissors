function getComputerChoice() {
    const compChoice = Math.floor(Math.random() * 3);
    // const playerChoice = prompt("Rock, Scissors, or Paper?", "Rock");
    const playerChoice = "Rock";
    let comp;
    let player;

    if (compChoice == 0) {
        comp = "Rock";
    } else if (compChoice == 1) {
        comp = "Scissors";
    } else {
        comp = "Paper";
    }

    if (playerChoice == "Rock") {
        player = 0;
    } else if (playerChoice == "Scissors") {
        player = 1;
    } else if (playerChoice == "Paper") {
        player = 2;
    } else {
        console.log("Please choose Rock, Paper, or Scissors");
    };

    if (compChoice === player) {
        console.log("Tie!")
    }

console.log("Computer Choice: ", comp);
console.log("Player Choice: ", playerChoice);

};

getComputerChoice();