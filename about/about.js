// document.getElementById("hamburger").addEventListener("click", () => {
//   document.getElementById("hamburger").classList.toggle("toggle");
//   document.getElementById("nav-links").classList.toggle("show");
// });


const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("toggle");
});

// Fade in sections and cards on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

// Attach observer to all sections and cards
document.querySelectorAll("section, .card").forEach((el) => observer.observe(el));

