
// ========================================
// LOGO DESIGN PAGE ANIMATIONS
// ========================================

document.addEventListener("DOMContentLoaded", () => {

  // 1. LETTER-BY-LETTER TITLE

  const title = document.querySelector(".logo-title");

  if (title) {

    const lines = title.querySelectorAll("span");

    let letterIndex = 0;

    lines.forEach((line) => {

      const originalText = line.textContent.trim();

      line.textContent = "";

      [...originalText].forEach((character) => {

        const letter = document.createElement("span");

        letter.className = "title-letter";
        letter.textContent = character;
        letter.setAttribute("data-char", character);
        letter.style.setProperty("--i", letterIndex);

        letter.setAttribute("aria-hidden", "true");

        line.appendChild(letter);

        letterIndex++;
      });

    });

  }

  // 2. SCROLL REVEAL

  const revealItems = document.querySelectorAll(".reveal");

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
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px"
      }
    );

    revealItems.forEach((item) => {
      observer.observe(item);
    });

  } else {

    revealItems.forEach((item) => {
      item.classList.add("visible");
    });

  }

  // 3. MOBILE MENU

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".logo-navigation");

  if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

      const isOpen = navigation.classList.toggle("open");

      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

    });

  }

});
