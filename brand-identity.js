
// ========================================
// BRAND IDENTITY — ANIMATIONS
// ========================================

document.addEventListener("DOMContentLoaded", () => {

  // 1. TITLE LETTER ANIMATION

  const title = document.querySelector(".brand-title");

  if (title) {

    const lines = title.querySelectorAll(".title-line");
    let index = 0;

    lines.forEach((line) => {

      const original = line.textContent.trim();

      line.textContent = "";

      [...original].forEach((character) => {

        const letter = document.createElement("span");

        letter.className = "title-letter";
        letter.textContent = character;
        letter.setAttribute("data-char", character);
        letter.setAttribute("aria-hidden", "true");

        letter.style.setProperty("--i", index);

        line.appendChild(letter);

        index++;
      });

    });

  }

  // 2. FOLDER SCROLL ANIMATION

  const cards = document.querySelectorAll(".brand-card.reveal");

  function revealCards() {

    cards.forEach((card) => {
      card.classList.add("visible");
    });

  }

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            revealCards();
            observer.disconnect();

          }

        });

      },
      {
        threshold: 0.08
      }
    );

    if (cards.length > 0) {
      observer.observe(cards[0]);
    }

  } else {

    revealCards();

  }

  // 3. MOBILE MENU

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");

  if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

      const isOpen = navigation.classList.toggle("open");

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
