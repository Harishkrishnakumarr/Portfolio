// Run only after DOM is ready
document.addEventListener("DOMContentLoaded", () => {

  // Set year
  const yearEl = document.getElementById("y");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Active nav
  document.querySelectorAll(".menu a").forEach(a => {
    a.addEventListener("click", () => {
      document.querySelectorAll(".menu a")
        .forEach(x => x.classList.remove("active"));
      a.classList.add("active");
    });
  });

  // Hamburger toggle
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

});
