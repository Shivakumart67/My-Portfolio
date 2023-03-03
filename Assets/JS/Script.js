// Show Menu Hamburger Menu Designing for Mobile View.

const toggle = document.getElementById("nav_toggle");
const nav = document.getElementById("nav_menu");
toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Adding the Active class to Navigation Items
const navlist = document.querySelectorAll(".nav_link");
var check;
nav.addEventListener("click", (e) => {
  console.log(e.target);
  const target = e.target;
  if (check != undefined) {
    check.classList.remove("active");
  }
  target.classList.add("active");
  check = target;
  nav.classList.remove("show");
});
