import './style.css'

const cardlist = [
  {
  Number: 1,
  },
  {
  Number: 2,
  },
  {
  Number: 3,
  },
  {
  Number: 4,
  },
  {
  Number: 5,
  },
  {
  Number: 6,
  },
  {
  Number: 7,
  },
  {
  Number: 8,
  },
  {
  Number: 9,
  },
  {
  Number: 10,
  },
]

const HIT = document.getElementById("HIT");
const STAND = document.getElementById("STAND");
const HISTORY = document.getElementById("HISTORY")
const DELETE_HISTORY = document.getElementById("DELETE_HISTORY")

const playertotal = [0];

const AItotal = [0];

const wincounter = [0];

const playercardtotal = [0];

const algurithem = (playercardtotal, aicardtotal) => {
  while (playercardtotal < 21){
    if (HIT = true){
      //player clicks hit button
    }
    if (STAND = true){
      //player clicks stand button
    }
  } 
};

HIT.addEventListener("click", async function () {
  if (playercardtotal > 21) {
    console.log("You already LOST, start a new game")
  } else {
    const rngnumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    generatednumber = cardlist.rngnumber
  }

});

STAND.addEventListener("click", async function () {

});

HISTORY.addEventListener("click", async function () {

});

DELETE_HISTORY.addEventListener("click", async function () {

});