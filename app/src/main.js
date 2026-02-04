import './style.css'

const RROCK = document.getElementById("ROCK");
const PPAPER = document.getElementById("PAPER");
const SSCISSOR = document.getElementById("SCISSOR")
const SSTART = document.getElementById("START")
let win = false
/* let history = []; */
let result = "";
const history = document.querySelector('.History');

SSTART.addEventListener("click", async function () {
  game()
});

const stuff = ["paper", "rock", "scissor"]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function game(){
  console.log("This is working")
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
    result = "draw!";
    history.push("draw!");
  } 
  else if (
    (something === "rock" && computerother === "scissor") ||
    (something === "paper" && computerother === "rock") ||
    (something === "scissor" && computerother === "paper")
  ) {
    console.log("WIN!");
    win = true;
    result = "WIN!";
    history.push("WIN!");
  } 
  else {
    console.log("again");
    result = "LOSE";
    history.push("LOSE");
  }
  
}