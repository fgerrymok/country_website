"use strict";

const menuBtn = document.getElementById("menu-btn");
const navigationElem = document.getElementById("main-navigation");

// add a button that when clicked will add append a new class to

menuBtn.addEventListener("click", function () {
  console.log("You clicked the button");
  navigationElem.classList.toggle("toggled");
});
