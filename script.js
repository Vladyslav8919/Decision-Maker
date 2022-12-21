"use strict";

// Button 1
document.querySelector(".btn1").addEventListener("click", function () {
  const randomNumber = Math.trunc(Math.random() * 10) + 1;
  if (randomNumber > 5) {
    document.querySelector("body").style.backgroundColor = "#d8f5a2";
    const h2 = document.createElement("h2");
    h2.innerText = "⪫ Yes, do it!";
    document.body.appendChild(h2);
  } else if (randomNumber < 5) {
    document.querySelector("body").style.backgroundColor = "#ffc9c9";
    const h2 = document.createElement("h2");
    h2.innerText = "⪫ No, don't do that!";
    document.body.appendChild(h2);
  }
});

// Button 2

document.querySelector(".btn2").addEventListener("click", function () {
  const numberOfChoices = Number(
    prompt("Enter the number of your choices right here ↓")
  );

  if (!numberOfChoices) {
    document.querySelector("body").style.backgroundColor = "#ffc9c9";
    const h2 = document.createElement("h2");
    h2.innerText = "⪫ That's not a number!";
    document.body.appendChild(h2);
  } else {
    const randomNumber = Math.trunc(Math.random() * numberOfChoices) + 1;
    document.querySelector("body").style.backgroundColor = "#dbe4ff";
    const h2 = document.createElement("h2");
    h2.innerText = `⪫ Your choice is ${randomNumber}!`;
    document.body.appendChild(h2);
  }
});
