document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("main-nav");
  const navLinks = document.querySelectorAll(".nav-list a");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function (e) {
    e.stopPropagation();
    nav.classList.toggle("open");
    toggle.classList.toggle("open");
  });

  navLinks.forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.classList.remove("open");
    })
  );

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove("open");
      toggle.classList.remove("open");
    }
  });

  // Ensure menu closed on resize to large screens
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      nav.classList.remove("open");
      toggle.classList.remove("open");
    }
  });
});
