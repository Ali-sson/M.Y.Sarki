
  const links = document.querySelectorAll(".category-link");
  const items = document.querySelectorAll(".gallery-item");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove active class from all
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      const category = link.getAttribute("data-category");

      items.forEach(item => {
        if (category === "all" || item.getAttribute("data-category") === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });



// Toggle hamburger icon and nav-links display
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("hamburger").classList.toggle("toggle");
  document.getElementById("nav-links").classList.toggle("show");
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

