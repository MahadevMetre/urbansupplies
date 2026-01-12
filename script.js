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

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");

    faqItems.forEach((i) => i.classList.remove("active"));

    if (!isOpen) {
      item.classList.add("active");
    }
  });
});
