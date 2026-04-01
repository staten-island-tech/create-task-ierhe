import './style.css'

const RROCK = document.getElementById("ROCK");
const PPAPER = document.getElementById("PAPER");
const SSCISSOR = document.getElementById("SCISSOR");
const SSTART = document.getElementById("START");
let history = [];
let result = "";
const historybox = document.querySelector('.History');
let round = 0;

SSTART.addEventListener("click", function () {
  historybox.innerHTML = "";
  historybox.innerHTML += `<div>Game Reset! Can play 5 rounds again</div>`;
  RROCK.disabled = false;
  PPAPER.disabled = false;
  SSCISSOR.disabled = false;
  round = 0;
});

const winConditions = {
  rock: "scissor",
  paper: "rock",
  scissor: "paper"
};

const stuff = ["paper", "rock", "scissor"]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

RROCK.addEventListener("click", () => thegame("rock"));
PPAPER.addEventListener("click", () => thegame("paper"));
SSCISSOR.addEventListener("click", () => thegame("scissor"));

function thegame(something){
  while (round < 5) {
    const computer = getRandomInt(stuff.length);
    const computerother = stuff[computer];
    if (something === computerother) {
      console.log("It's a draw");
      result = ("draw!");
    } 
    else if (winConditions[something] === computerother) {
      console.log("WIN!");
      result = "WIN!";
    } 
    else {
      console.log("again");
      result = "LOST";
    }
    history.push(result);
    historybox.innerHTML += `<div>Round ${round + 1}: ${result}</div>`;
    round++;
    break;
  }
  if (round >= 5) {
    console.log("Maximum rounds reached!");
    historybox.innerHTML += `<div>Game Over! Max 5 rounds reached.</div>`;
    RROCK.disabled = true;
    PPAPER.disabled = true;
    SSCISSOR.disabled = true;
  }
}
