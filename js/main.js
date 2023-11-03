

const navigation = document.querySelector(".navigation");
const navigationTop = document.querySelector(".top_of_navigation");

navigationTop.addEventListener("mouseenter", function () {
    navigation.classList.add("navigation_on_hover");
});

navigationTop.addEventListener("mouseleave", function () {
    navigation.classList.remove("navigation_on_hover");
});

navigation.addEventListener("mouseenter", function () {
    navigation.classList.add("navigation_on_hover");
});

navigation.addEventListener("mouseleave", function () {
    navigation.classList.remove("navigation_on_hover");
});

const sideBoxContent = document.querySelectorAll(".sideBoxContent");
const sideBox = document.querySelectorAll(".sideBox");

sideBox.forEach((top, index) => {
  top.addEventListener("mouseenter", () => {
    sideBoxContent[index].classList.add("sideBoxOnHover");
  });

  top.addEventListener("mouseleave", () => {
    sideBoxContent[index].classList.remove("sideBoxOnHover");
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const quote1 = document.getElementById("line1");
  const quote2 = document.getElementById("line2");
  const quote3 = document.getElementById("line3");
  const img = document.getElementById("mainImage");
  quote1.style.opacity = 1;
  quote2.style.opacity = 1;
  quote3.style.opacity = 1;
  img.style.opacity = 1;
  img.style.margin = 0;

  quote1.style.margin = 0;
  quote2.style.margin = 0;
  quote3.style.margin = 0;
});

document.getElementById("year").innerHTML = new Date().getFullYear();