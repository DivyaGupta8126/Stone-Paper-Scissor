let userScore = 0;
let compScore = 0;
let val, userval, computerval;

let stone = document.getElementById("stone");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let user = document.getElementById("user");
let computer = document.getElementById("computer");
let move = document.getElementById("move");
let box = document.getElementById("box1");

function compChoice() {
  let choices = ["Stone", "Paper", "Scissor"];
  let ind = Math.floor(Math.random() * 3);
  return choices[ind];
}

stone.addEventListener("click", () => {
  val = "Stone";
  playGame();
});

paper.addEventListener("click", () => {
  val = "Paper";
  playGame();
});

scissor.addEventListener("click", () => {
  val = "Scissor";
  playGame();
});

function playGame() {
  computerval = compChoice();
  userval = val;
  console.log(userval, computerval);
  if (computerval === userval) {
    console.log("draw");
    move.innerText = `It's a draw.`;
  } else if (
    (userval === "Stone" && computerval === "Scissor") ||
    (userval === "Paper" && computerval === "Stone") ||
    (userval === "Scissor" && computerval === "Paper")
  ) {
    console.log("user won");
    userScore++;
    user.innerText = userScore;
    move.innerText = `User wins.${userval} beats ${computerval}`;
  } else {
    console.log("Computer won");
    compScore++;
    computer.innerText = compScore;
    move.innerText = `Computer wins. ${computerval} beats ${userval}`;
  }
  display();
}

function display() {
  if (userScore === 5) {
    move.innerText = "Congratulations you won !";
    stone.style.display = "none";
    paper.style.display = "none";
    scissor.style.display = "none";
  } else if (compScore === 5) {
    move.innerText = "Sorry, you lost :(";
    stone.style.display = "none";
    paper.style.display = "none";
    scissor.style.display = "none";
  }
}
