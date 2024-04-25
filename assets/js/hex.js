window.onload = function () {
  let local = localStorage.getItem("colorTow");
  if (local) {
    document.body.style.backgroundColor = local;
    colorText.textContent = local;
  } else {
    document.body.style.backgroundColor = "#fff";
    colorText.textContent = "#fff";
  }
};
const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// Start Difination A Varibals
const colorText = document.querySelector(".color");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += colors[getRandomNumber()];
  }
  document.body.style.backgroundColor = hex;
  colorText.textContent = hex;
  localStorage.setItem("colorTow", hex);
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
