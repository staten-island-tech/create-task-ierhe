import './style.css'

const RROCK = document.getElementById("ROCK");
const PPAPER = document.getElementById("PAPER");
const SSCISSOR = document.getElementById("SCISSOR");
const SSTART = document.getElementById("START");
let win = false;
let history = [];
let result = "";
const historybox = document.querySelector('.History');

SSTART.addEventListener("click", function () {
  game()
});

const stuff = ["paper", "rock", "scissor"]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function game(){
  while (!win) {
    RROCK.addEventListener("click", () => thegame("rock"));
    PPAPER.addEventListener("click", () => thegame("paper"));
    SSCISSOR.addEventListener("click", () => thegame("scissor"));
    break;
  }
}

function thegame(something){
  const computer = getRandomInt(stuff.length);
  const computerother = stuff[computer];
  if (something === computerother) {
    console.log("It's a draw");
    history.push("draw!");
    result = ("draw!");
    historybox.innerHTML += `<div>${result}</div>`;
  } 
  else if (
    (something === "rock" && computerother === "scissor") ||
    (something === "paper" && computerother === "rock") ||
    (something === "scissor" && computerother === "paper")
  ) {
    console.log("WIN!");
    win = true;
    result = ("WIN!");
    historybox.innerHTML += `<div>${result}</div>`;
  } 
  else {
    console.log("again");
    history.push("LOSE");
    result = ("LOST");
    historybox.innerHTML += `<div>${result}</div>`;
  }
  
}
