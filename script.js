const copyright = document.getElementById("copyright");

document.addEventListener("DOMContentLoaded", function () {
  const year = new Date().getFullYear();
  copyright.textContent = year;

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("main-nav");
  const navLinks = document.querySelectorAll(".nav-list a");

  const barsIcon = document.getElementById("bars");
  const closeIcon = document.getElementById("close");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function (e) {
    e.stopPropagation();
    nav.classList.toggle("open");
    toggle.classList.toggle("open");

    // Toggle icons
    if (nav.classList.contains("open")) {
      barsIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
    } else {
      barsIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  });

  navLinks.forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.classList.remove("open");

      // Reset icons
      barsIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    })
  );

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove("open");
      toggle.classList.remove("open");

      // Reset icons
      barsIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
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
