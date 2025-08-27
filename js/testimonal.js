let slides = document.querySelectorAll(".testimonial-slide");
let dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });
  slides[index].classList.add("active");
  dots[index].classList.add("active");
  currentIndex = index;
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});

// Auto-play slider
setInterval(() => {
  let nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}, 5000); // 5 seconds