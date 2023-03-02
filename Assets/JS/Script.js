// Show Menu Hamburger Menu Designing.

const toggle = document.getElementById("nav_toggle");
const nav = document.getElementById("nav_menu");
var flag = true;
toggle.addEventListener("click", () => {
  //   console.log();
  if (nav.hasAttribute("class", "show") && flag === false) {
    nav.classList.remove("show");
    flag = true;
  } else {
    nav.classList.add("show");
    flag = false;
  }
});
