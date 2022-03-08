const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");

const modal = document.getElementById("modalPopup");
function openNav(e) {
  mobileMenu.classList.toggle("menuOpen");
  e.preventDefault();
}
function closeNav(e) {
  mobileMenu.classList.toggle("menuClosed");
  e.preventDefault();
}
function openModal(e) {
  modal.style.display = "block";
  e.preventDefault();
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
