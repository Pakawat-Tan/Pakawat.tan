// Script.js

let slideIndex = 1;
showSlides();

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide-image");
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  // Add functionality to change slide content or indicators here (if needed)
}

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function () {
  // Toggle the active class on the side panel
  document.querySelector(".side-panel").classList.toggle;
});
