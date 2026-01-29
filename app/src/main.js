import './style.css'

const ROCK = document.getElementById("ROCK");
const PAPER = document.getElementById("PAPER");
const SCISSOR = document.getElementById("SCISSOR")
const START = document.getElementById("START")
const playerwin = [0]
let start = "false"
let win = "false"

START.addEventListener("click", async function () {
  start = "true"
});


while ((start = "true")){
  ROCK.addEventListener("click", async function () {
    const AIside = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (AIside = 3) {
      console.log("Its a draw, none wins") //rock
    } else if (AIside = 2) {
      console.log("Its a win, nice") //scissors
      playerwin++
      win = "true"
      return(win)
    } if (AIside = 1) {
      console.log("Its a lost, go again!") //paper
    }
    });
  PAPER.addEventListener("click", async function () {
    const AIside = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (AIside = 3) {
      console.log("Its a win, nice") //rock
      playerwin++
      win = "true"
      return(win)
    } else if (AIside = 2) {
      console.log("Its a lost, go again!") //scissors
    } if (AIside = 1) {
      console.log("Its a draw, none wins") //paper
}
    });
  SCISSOR.addEventListener("click", async function () {
    const AIside = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (AIside = 3) {
      console.log("Its a lost, go again!") //rock
    } else if (AIside = 2) {
      console.log("Its a draw, none wins") //scissors
    } if (AIside = 1) {
      console.log("Its a win, nice") //paper
      playerwin++
      win = "true"
      return(win)
    }
  });
} 



