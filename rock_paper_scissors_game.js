// Rock, Paper, Scissors GAME
// By Marc A Felicidario
// 29 Nov. 2022
// JavaScript


const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'Rock' || userInput === 'Paper' || userInput === 'Scissors' || userInput === 'Bomb') {
      return userInput;
    } else {
      console.log('Error!');
    }
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
    return 'Paper';
    case 1:
    return 'Rock';
    case 2:
    return 'Scissors';
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Game is a TIE!';
    }  
    if (userChoice === 'Rock') {
      if (computerChoice === 'Paper') {
        return "Oops! The computer has won!";
      } else {
        return "Congratulations You Win!";
      }
    }
    if (userChoice === 'Paper') {
      if (computerChoice === 'Scissors') {
        return "Sorry, computer won!";
      } else {
        return "You win!";
      }
    }
    if (userChoice === 'Scissors') {
      if (computerChoice === 'Rock') {
        return "You have lost to the computer.";
      } else {
        return "You win!";
      }
    }
    if (userChoice === 'Bomb') {
      return 'Congrats YOU WIN!!!!';
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('Bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
