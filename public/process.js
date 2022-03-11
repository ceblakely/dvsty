window.onload = function () {
  showSlides(
    document.getElementsByClassName("userSlide"),
    document.getElementsByClassName("userDot"),
    1
  );
  showSlides(
    document.getElementsByClassName("mockupSlide"),
    document.getElementsByClassName("mockupDot"),
    1
  );
};
let slideshow;
let dots;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n, el) {
  alert(n);
  if (el.className == "userDot") {
    slideShow = document.getElementsByClassName("userSlide");
    dots = document.getElementsByClassName("userDot");
  } else {
    slideshow = document.getElementsByClassName("mockupSlide");
    dots = document.getElementsByClassName("mockupDot");
  }
  showSlides(slideshow, dots, n);
}

function showSlides(slideshow, dots, n) {
  let slideIndex;
  let i;
  if (n > slideshow.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slideshow.length;
  }
  for (i = 0; i < slideshow.length; i++) {
    slideshow[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideshow[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  alert("slide index" + slideIndex);
}
