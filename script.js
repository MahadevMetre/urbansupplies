const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

let index = 0;
const totalSlides = dots.length;

function showSlide(i) {
  slides.style.transform = `translateX(-${i * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[i].classList.add("active");
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    showSlide(index);
  });
});

setInterval(() => {
  index = (index + 1) % totalSlides;
  showSlide(index);
}, 3000);
