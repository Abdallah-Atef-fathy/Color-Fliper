window.onload = function () {
  let local = localStorage.getItem("color");
  if (local) {
    document.body.style.backgroundColor = local;
    colorText.textContent = local;
  } else {
    document.body.style.backgroundColor = "#fff";
    colorText.textContent = "#fff";
  }
};
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Start Difination A Varibals

let colorText = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  colorText.textContent = colors[randomNumber];
  // Add The Color In The LocalStorage
  localStorage.setItem("color", colors[randomNumber]);
});

// Randoom Number Between (0-4)

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
