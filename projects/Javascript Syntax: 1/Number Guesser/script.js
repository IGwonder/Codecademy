let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    const randNum = Math.floor(Math.random()*10)
    return randNum
};

function alert(humanGuess) {
    if (humanGuess > 9 && humanGuess < 0) {return 'Number is out of range!';}
}

function compareGuesses(humanGuess, computerGuess, secretGuess) {
    const humanDistance = humanGuess - secretGuess;
    const computerDistance = computerGuess - secretGuess;
    if (humanDistance === computerDistance) {return true;} //human wins
        else if (humanDistance < computerDistance) {return true;} //human wins
        else if (humanDistance > computerDistance) {return false;} // computer wins
};

function updateScore(winner) {
    if (winner === 'human') {humanScore += 1;}
        else if (winner === 'computer') {computerScore += 1;}
};

function advanceRound() {
    currentRoundNumber += 1;
};

