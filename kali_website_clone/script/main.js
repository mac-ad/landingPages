// burger and nav menu in mob
const burger = document.querySelector(".nav__burger");
const nav__menu_mobile = document.querySelector(".nav__menu_mobile");
const nav = document.querySelector("nav");
const logo = document.querySelector("#logo");

burger.addEventListener("click", () => {
  nav.classList.toggle("show-menu");
});

// carousel
const carousel = document.querySelector(".carousel");
const carouselChild = carousel.querySelectorAll("div a");
const carouselDiv = carousel.querySelector("div");
let moveBy = 0;
window.addEventListener("load", () => {
  setInterval(() => {
    moveBy += carouselChild[0].clientWidth;
    if (
      carouselChild[carouselChild.length - 1].getBoundingClientRect().right <=
      carousel.getBoundingClientRect().right
    ) {
      moveBy = 0;
    }
    // console.log(
    //   `carousel = ${
    //     carouselChild[carouselChild.length - 1].getBoundingClientRect().right
    //   } and divs = ${carousel.getBoundingClientRect().right} `
    // );
    carouselDiv.style.transform = `translateX(-${moveBy}px)`;
    console.log("sdfad");
  }, 3000);
});
