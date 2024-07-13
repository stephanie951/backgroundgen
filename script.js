var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("carry");

function changeColor() {
  body.style.background =
    "linear-gradient( to right, " + color1.value + ", " + color2.value + ")";
}

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(true) ? "how are you" : "i am fine";
