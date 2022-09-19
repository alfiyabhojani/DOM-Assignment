let btn = document.querySelector(".btn-cta-big");
let form = document.querySelector(".btn-cta-big .login-btn-text ");

btn.addEventListener("mouseover", () => {
  form.style.background = "Red";
});

btn.addEventListener("mouseout", () => {
  form.style.background = "transparent";
});
