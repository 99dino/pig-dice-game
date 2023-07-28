"use strict";

let currentscore, turn, score, playing;

// when starting the game
const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1");

const currentscore0 = document.getElementById("current--0");
const currentscore1 = document.getElementById("current--1");

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

const dice = document.querySelector(".dice");
dice.classList.add("hidden");

const hold = document.querySelector(".btn--hold");
const roll = document.querySelector(".btn--roll");
const newgame = document.querySelector(".btn--new");

roll.addEventListener("click", () => {
  if (playing) {
    const rand = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${rand}.png`;
    dice.classList.remove("hidden");
    if (rand === 1) {
      switchturn();
    } else {
      currentscore += rand;
    }
    document.getElementById(`current--${turn}`).textContent = currentscore;
  }
});

hold.addEventListener("click", () => {
  if (playing) {
    score[turn] += currentscore;
    document.getElementById(`score--${turn}`).textContent = score[turn];
    if (score[turn] >= 20) {
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player--${turn}`)
        .classList.add("player--winner");
    } else {
      switchturn();
    }
  }
});
