let form = document.querySelector(".searchinput___zXLAR");
form.addEventListener("mouseenter", red);
form.addEventListener("mouseout", white);
function red() {
  form.style.background = "red";
  form.style.transition = "all 0.2s ease-in-out";
}
function white() {
  form.style.background = "white";
  form.style.transition = "all 0.2s ease-in-out";
}
