let userScore = 0;
let computerScore = 0;

const userSpanScore = document.getElementById("user-score");
const computerSpanScore = document.getElementById("computer-score");

const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".results>p");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const getComputerChoice = () => {
  const choice = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choice[randomNumber];
};

const game = (userChoice) => {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lost(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
    default:
      break;
  }
};

const convertLetter = (letter) => {
  if (letter === "rock") return "Rock";
  if (letter === "paper") return "Paper";
  return "Scissors";
};

const win = (userChoice, computerChoice) => {
  userScore++;
  userSpanScore.innerHTML = userScore;
  computerSpanScore.innerHTML = computerScore;
  result.innerHTML = `${convertLetter(userChoice)}(user) beats ${convertLetter(
    computerChoice
  )}(computer). You win .....!!`;
};

const lost = (userChoice, computerChoice) => {
  computerScore++;
  userSpanScore.innerHTML = userScore;
  computerSpanScore.innerHTML = computerScore;
  result.innerHTML = `${convertLetter(
    userChoice
  )}(user) lose to ${convertLetter(
    computerChoice
  )}(computer). You lost .....!!`;
};

const draw = (userChoice, computerChoice) => {
  result.innerHTML = `${convertLetter(
    userChoice
  )}(user) equals to ${convertLetter(
    computerChoice
  )}(computer). Match draw .....!!`;
};

const main = () => {
  rock.addEventListener("click", () => {
    game("rock");
  });

  paper.addEventListener("click", () => {
    game("paper");
  });

  scissors.addEventListener("click", () => {
    game("scissors");
  });
};

main();
