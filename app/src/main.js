import './style.css'

const RROCK = document.getElementById("ROCK");
const PPAPER = document.getElementById("PAPER");
const SSCISSOR = document.getElementById("SCISSOR")
const SSTART = document.getElementById("START")
const playerwin = 0
let start = false
let win = false

SSTART.addEventListener("click", async function () {
  start = true
});

const stuff = ["paper, rock, scssior"]

async function something(stuff) {
  console.log("I'M WORKING ON IT")
  const userinput = await game();
}

something();

function game(){ 
  console.log("This is working")
  while (start && !win){
    RROCK.addEventListener("click", async function () {
      console.log("work please?")
      const AIside = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
      if (AIside === 3) {
        console.log("Its a draw, none wins") //rock
      } else if (AIside === 2) {
        console.log("Its a win, nice") //scissors
        playerwin++
        win = true
        return(win)
      } if (AIside === 1) {
        console.log("Its a lost, go again!") //paper
      }
      });
    PPAPER.addEventListener("click", async function () {
      const AIside = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
      if (AIside === 3) {
        console.log("Its a win, nice") //rock
        playerwin++
        win = true
        return(win)
      } else if (AIside === 2) {
        console.log("Its a lost, go again!") //scissors
      } if (AIside === 1) {
        console.log("Its a draw, none wins") //paper
      }
      });
    SSCISSOR.addEventListener("click", async function () {
      const AIside = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
      if (AIside === 3) {
        console.log("Its a lost, go again!") //rock
      } else if (AIside === 2) {
        console.log("Its a draw, none wins") //scissors
      } if (AIside === 1) {
        console.log("Its a win, nice") //paper
        playerwin++
        win = true
        return(win)
      }
    });
  } 
}


