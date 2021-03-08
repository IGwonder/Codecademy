console.clear()

userInput = 'Paper';

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput == 'rock') {
        return userInput;
    } else if (userInput == 'paper') {
        return userInput;
    } else if (userInput == 'scissors') {
        return userInput;
    } else {
        return console.log('User error: wrong input!');
    }
};

const getComputerChoice = () => {
    let choice = Math.floor(Math.random()*3);
    if (choice == 0) {
        return 'rock';
    } else if (choice == 1) {
        return 'paper';
    } else if (choice == 2) {
        return 'scissors';
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice == computerChoice) {
        return 'Tie';
    } if (computerChoice == 'paper') {
        } else if (userChoice == 'rock') {
            return 'Computer winns!';
        } else {
            return 'User winns!';
    } if (computerChoice == 'rock') {
        } else if (userChoice == 'paper') {
            return 'User winns!';
        } else {
            return 'Computer winns!';
    } if (computerChoice == 'scissors') {
        } else if (userChoice == 'paper') {
            return 'Computer winns!';
        } else {
            return 'User winns!';
        }
};

const playGame = () => {
    const userChoice = getUserChoice(userInput);
    const computerChoice = getComputerChoice();
    console.log('User: ' + userChoice);
    console.log('Computer: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
 
playGame()