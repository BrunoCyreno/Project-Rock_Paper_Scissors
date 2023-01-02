function getComputerChoice(){
    let computerSelection = Math.floor(Math.random() * 3);

    if (computerSelection == 0) {
        computerSelection = "Rock";
    }
    else if (computerSelection == 1) {
        computerSelection = "Paper";
    }
    else {
        computerSelection = "Scissors";
    } 

    return computerSelection
}

let result = getComputerChoice();
console.log(result)
