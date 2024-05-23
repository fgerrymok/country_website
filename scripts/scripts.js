"use strict";

// constants

const menuBtn = document.getElementById("menu-btn");
const navigationElem = document.getElementById("main-navigation");
const pinOne = document.getElementById("pin-one-svg");
const pinTwo = document.getElementById("pin-two-svg");
const pinThree = document.getElementById("pin-three-svg");
const pinFour = document.getElementById("pin-four-svg");
const attractionOne = document.getElementById("monster-tower-article");
const attractionTwo = document.getElementById("avenue-of-stars-article");
const attractionThree = document.getElementById("temple-article");
const attractionFour = document.getElementById("prison-article");
const closeBtns = document.querySelectorAll(".close-button");

// event listeners

menuBtn.addEventListener("click", function () {
  navigationElem.classList.toggle("toggled");
});

pinOne.addEventListener("click", function () {
  attractionOne.classList.toggle("show-popup");
});

pinTwo.addEventListener("click", function () {
  attractionTwo.classList.toggle("show-popup");
});

pinThree.addEventListener("click", function () {
  attractionThree.classList.toggle("show-popup");
});

pinFour.addEventListener("click", function () {
  attractionFour.classList.toggle("show-popup");
});

closeBtns.forEach(closePopup);

function closePopup(closeBtn) {
  closeBtn.addEventListener("click", function () {
    attractionOne.classList.remove("show-popup");
    attractionTwo.classList.remove("show-popup");
    attractionThree.classList.remove("show-popup");
    attractionFour.classList.remove("show-popup");
  });
}
