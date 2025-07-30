document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".links");
  const overlay = document.querySelector(".overlay");
  const body = document.body;
  const megaHover = document.querySelector(".mega-hover");
  const megaToggleLink = document.querySelector(".toggle-mega");

  const openMenu = () => {
    navLinks.classList.add("active");
    overlay.style.display = "block";
    body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    navLinks.classList.remove("active");
    megaHover.classList.remove("active");
    overlay.style.display = "none";
    body.style.overflow = "";
  };

  burger.addEventListener("click", () => {
    navLinks.classList.contains("active") ? closeMenu() : openMenu();
  });

  overlay.addEventListener("click", closeMenu);

  // Mega menu toggler (mobile only)
  megaToggleLink.addEventListener("click", (e) => {
    e.preventDefault(); // prevent default behavior
    if (window.innerWidth <= 992) {
      megaHover.classList.toggle("active");
    }
  });

  // Prevent jump + close menu when link clicked (except mega-hover)
  navLinks.querySelectorAll("a").forEach(link => {
    if (link.getAttribute("href") === "#") {
      link.addEventListener("click", e => e.preventDefault());
    }

    link.addEventListener("click", () => {
      if (!link.closest(".mega-hover")) {
        closeMenu();
      }
    });
  });

  // Close on window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      closeMenu();
    }
  });
});
