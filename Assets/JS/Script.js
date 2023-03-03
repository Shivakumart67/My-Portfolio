// Show Menu Hamburger Menu Designing for Mobile View.

const toggle = document.getElementById("nav_toggle");
const nav = document.getElementById("nav_menu");
toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Adding the Active class to Navigation Items
const navlist = document.querySelectorAll(".nav_link");
const cond = document.querySelector("li:first-child a");

var check = cond;
nav.addEventListener("click", (e) => {
  const target = e.target;
  if (check != undefined) {
    check.classList.remove("active");
  }
  cond.classList.remove("active");
  target.classList.add("active");
  check = target;
  nav.classList.remove("show");
});
