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





/* function game(){ 
  console.log("This is working")
  while (!win){
    RROCK.onclick = function() {
      console.log("work please?")
      const computer = getRandomInt(stuff.length);
      const computerother = stuff[computer];
      console.log(computerother)
      if (computerother === "rock") {
        console.log("Its a draw, none wins") //rock
      } else if (computerother === "scissor") {
        console.log("Its a win, nice") //scissor
        text = "WIN";
        Box.appendChild(text);
        playerwin++
        win = true
        return(win)
      } else if (computerother === "paper") {
        console.log("Its a lost, go again!") //paper
      }
    };
    break;
  }
} */

  
/* function game(){ 
  console.log("This is working")
  while (){
    RROCK.addEventListener("click", async function () {
      console.log("work please?")
      getRandomInt(3)
      if (AIside === getRandomInt) {
        console.log("Its a draw, none wins") //rock
      } else if (AIside === getRandomInt) {
        console.log("Its a win, nice") //scissors
        playerwin++
        win = true
        return(win)
      } if (AIside === getRandomInt) {
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

 */