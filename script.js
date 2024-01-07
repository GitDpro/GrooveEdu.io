let userLevel = 0;
const User = "";
const head = document.getElementById("head");

document.getElementById(
  "userL"
).innerHTML += `Level: ${0} <br> Achiements: None`;

User
  ? (head.innerHTML = `Welcome ${User}`)
  : (head.innerHTML = `Welcome! Are you ready to learn?`);
head.style.fontSize = "30px";
function run() {
  // Toggle the visibility of the hidden div
  const hiddenDiv = document.getElementById("hiddenDiv");
  hiddenDiv.style.display =
    hiddenDiv.style.display === "none" ? "block" : "none";
}

const button = document.getElementById("Kg-1");
button.addEventListener("click", run);

function game1() {
  const hiddenDiv = document.getElementById("hiddenDiv");
  // Toggle the visibility of the hidden div
  const gameBox = document.getElementById("gameBox");
  gameBox.style.display = gameBox.style.display === "none" ? "block" : "none";
}

const learnKg1 = document.getElementById("game1");
learnKg1.addEventListener("click", game1);
