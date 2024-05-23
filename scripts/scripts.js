"use strict";

// constants

const menuBtn = document.getElementById("menu-btn");
const navigationElem = document.getElementById("main-navigation");
const pinOne = document.getElementById("pin-one-svg");
const attractionOne = document.getElementById("monster-tower");

// event listeners

menuBtn.addEventListener("click", function () {
  navigationElem.classList.toggle("toggled");
});

pinOne.addEventListener("click", function () {
  attractionOne.classList.toggle("show-popup");
});
