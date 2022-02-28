const shopLi = document.getElementById("shopLi");
const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");

function openNav(e) {
  mobileMenu.classList.toggle("menuOpen");
  e.preventDefault();
}
function closeNav(e) {
  mobileMenu.classList.toggle("menuClosed");
  e.preventDefault();
}
