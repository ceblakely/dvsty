const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

function openModal(e) {
  modal.style.display = "block";
  e.preventDefault();
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function openNav(e) {
  mobileMenu.classList.toggle("menuOpen");
  e.preventDefault();
}
function closeNav(e) {
  mobileMenu.classList.toggle("menuClosed");
  e.preventDefault();
}
