/*
 * Title: EasyBank Landing Page By Frontend Mentor
 * Description:
 * Author: Samin Yasar
 * Date: 19/January/2021
 */

// hamburger icon animation toggle

const svgMenuToggle = document.getElementById("svg-menu-toggle");
const inlineSvg = document.getElementById("inline-svg");
const barEls = document
  .querySelector(".svg-menu-toggle")
  .querySelectorAll(".bar");

const mobileNavigationItems = document.getElementById(
  "mobile-navigation-items"
);

inlineSvg.addEventListener("click", () => {
  barEls[0].classList.toggle("bar-1-animation");
  barEls[1].classList.toggle("bar-2-animation");
  barEls[2].classList.toggle("bar-3-animation");
  mobileNavigationItems.classList.toggle("toggle-mobile-navigation-items");
});
