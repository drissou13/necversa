const slides = [
  "img/nec-versa-c200.webp",
  "img/nec-versa-c200-side.webp",
  "img/nec-versa-c200-open.webp"
];

let index = 0;

function showSlide(i) {
  const slide = document.getElementById("slide");
  if (i >= slides.length) index = 0;
  else if (i < 0) index = slides.length - 1;
  else index = i;
  slide.src = slides[index];
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}