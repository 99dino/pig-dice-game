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
