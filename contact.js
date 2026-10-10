
// ========================================
// CONTACT PAGE — ANIMATIONS
// ========================================

document.addEventListener("DOMContentLoaded", () => {

  // 1. TITLE LETTER ANIMATION

  const title = document.querySelector(".contact-title");

  if (title) {
    const lines = title.querySelectorAll(".title-line");
    let index = 0;

    lines.forEach((line) => {
      const originalText = line.textContent.trim();
      line.textContent = "";

      [...originalText].forEach((character) => {
        const letter = document.createElement("span");

        letter.className = "title-letter";
        letter.textContent =
          character === " " ? "\u00A0" : character;

        letter.setAttribute("data-char", character);
        letter.setAttribute("aria-hidden", "true");
        letter.style.setProperty("--i", index);

        line.appendChild(letter);
        index++;
      });
    });
  }

  // 2. SCROLL REVEAL

  const revealElements = document.querySelectorAll(".reveal");
  const steps = document.querySelectorAll(".process-step");

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
        rootMargin: "0px 0px -20px 0px"
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    // Numbers appear one after another

    const stepsContainer =
      document.querySelector(".process-steps");

    if (stepsContainer) {

      const stepsObserver = new IntersectionObserver(
        (entries) => {

          if (entries[0].isIntersecting) {

            steps.forEach((step) => {
              step.classList.add("visible");
            });

            stepsObserver.disconnect();
          }

        },
        {
          threshold: 0.12
        }
      );

      stepsObserver.observe(stepsContainer);
    }

  } else {

    revealElements.forEach((element) => {
      element.classList.add("visible");
    });

    steps.forEach((step) => {
      step.classList.add("visible");
    });
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

        menuButton.setAttribute("aria-expanded", "false");
      });

    });
  }

});
