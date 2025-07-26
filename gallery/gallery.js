
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
