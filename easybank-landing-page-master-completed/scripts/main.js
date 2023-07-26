
const header = document.querySelector("header");
const overlay = header.querySelector(".overlay");
const hamBurger = document.querySelector(".nav__hamburger");
hamBurger.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    overlay.classList.add("fade-out");
    overlay.classList.remove("fade-in");
    header.classList.remove("open");
  } else {
    header.classList.add("open");
    overlay.classList.add("fade-in");
    overlay.classList.remove("fade-out");
  }
});
