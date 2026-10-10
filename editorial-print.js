
// ========================================
// EDITORIAL & PRINT — ANIMATIONS
// ========================================

document.addEventListener("DOMContentLoaded", () => {

  // =====================================
  // 1. PRINT TITLE — LETTER ANIMATION
  // =====================================

  const title = document.querySelector(".print-title");

  if (title) {

    const originalText = title.textContent.trim();

    title.textContent = "";

    [...originalText].forEach((character, index) => {

      const letter = document.createElement("span");

      letter.className = "title-letter";
      letter.textContent = character;

      letter.setAttribute("data-char", character);
      letter.setAttribute("aria-hidden", "true");

      letter.style.setProperty("--i", index);

      title.appendChild(letter);

    });

    title.setAttribute("aria-label", originalText);

  }

  // =====================================
  // 2. SCROLL REVEAL
  // =====================================

  const revealElements =
    document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -25px 0px"
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

  } else {

    revealElements.forEach((element) => {
      element.classList.add("visible");
    });

  }

  // =====================================
  // 3. MOBILE NAVIGATION
  // =====================================

  const menuButton =
    document.querySelector(".menu-toggle");

  const navigation =
    document.querySelector(".site-nav");

  if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

      const isOpen =
        navigation.classList.toggle("open");

      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

    });

    navigation.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {

        navigation.classList.remove("open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

  }

});
