"use strict";

const menuBtn = document.getElementById("menu-btn");
const navigationElem = document.getElementById("main-navigation");

menuBtn.addEventListener("click", function () {
  navigationElem.classList.toggle("toggled");
});
