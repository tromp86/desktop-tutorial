"use strict";
const secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;

const evenHendler = function () {
  const guessNumber = Number(document.querySelector(".number-input").value);

  if (!guessNumber) {
    document.querySelector(".guess-message").textContent = "Введіть номер";
    score = score - 1;
    document.querySelector(".score").textContent = score;
  } else if (guessNumber === secretNumber) {
    document.querySelector(".guess-message").textContent = "Правильно";
    score = score + 2;
    document.querySelector(".score").textContent = score;
    document.querySelector(".question").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "rgba(8, 8, 8, 0.8)";
    document.querySelector(".question").style.backgroundColor = "green";
    document.querySelector(".question").style.width = "35rem";
  } else if (guessNumber >= secretNumber) {
    if (score > 1) {
      document.querySelector(".guess-message").textContent =
        "Секретне число менше";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".guess-message").textContent = "Гра закінчена";
    }
  } else if (guessNumber <= secretNumber) {
    if (score > 1) {
      document.querySelector(".guess-message").textContent =
        "Секретне число більше";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".guess-message").textContent = "Гра закінчена";
    }
  }
};
document.querySelector(".check").addEventListener("click", evenHendler);

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".question").textContent = "???";
  document.querySelector("body").style.backgroundColor =
    "rgba(13, 14, 14, 0.926)";
  document.querySelector(".question").style.backgroundColor = "#fff";
  document.querySelector(".question").style.width = "25rem";
  document.querySelector(".guess-message").textContent =
    "Почни вгадувати заново";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".number-input").value = "";
});
