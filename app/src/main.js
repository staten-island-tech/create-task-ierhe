import './style.css'

const RROCK = document.getElementById("ROCK");
const PPAPER = document.getElementById("PAPER");
const SSCISSOR = document.getElementById("SCISSOR")
const SSTART = document.getElementById("START")
let win = false

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
  } 
  else if (
    (something === "rock" && computerother === "scissor") ||
    (something === "paper" && computerother === "rock") ||
    (something === "scissor" && computerother === "paper")
  ) {
    console.log("WIN!");
    playerwin++;
    win = true;
  } 
  else {
    console.log("again");
  }
}