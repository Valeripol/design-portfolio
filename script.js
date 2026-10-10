
// ========================================
// PORTFOLIO ANIMATION
// ========================================

document.addEventListener("DOMContentLoaded", () => {

  const video = document.getElementById("macbook-video");

  const folders = [
    document.querySelector(".folder-branding"),
    document.querySelector(".folder-packaging"),
    document.querySelector(".folder-logo"),
    document.querySelector(".folder-print")
  ];

  let animationStarted = false;
  let videoFinished = false;

  // Reveal folders in sequence
  function revealFolders() {

    if (animationStarted) return;

    animationStarted = true;

    folders.forEach((folder, index) => {

      setTimeout(() => {
        folder.classList.add("fly");
      }, index * 180);

    });
  }

  // Start when the MacBook is almost open
  function checkVideoTime() {

    if (!video || videoFinished) return;

    const duration = Number.isFinite(video.duration)
      ? video.duration
      : 5;

    const revealAt = Math.max(0, duration - 1.2);

    if (video.currentTime >= revealAt) {
      videoFinished = true;
      revealFolders();
    }
  }

  if (video) {

    video.addEventListener("timeupdate", checkVideoTime);

    video.addEventListener("ended", () => {
      revealFolders();
    });

    // If the video fails to load,
    // keep navigation folders accessible.
    video.addEventListener("error", () => {
      revealFolders();
    });

    video.play().catch(() => {
      // Browsers may block automatic playback.
      // Show the folders as a fallback.
      revealFolders();
    });

  } else {
    revealFolders();
  }

  // ========================================
  // MOBILE MENU
  // ========================================

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");

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

// ========================================
// DESIGNER — LETTER BY LETTER
// ========================================

document.addEventListener("DOMContentLoaded", () => {

  const title = document.querySelector(".designer-title");

  if (!title) return;

  const text = title.textContent.trim();

  title.textContent = "";

  [...text].forEach((character, index) => {

    const span = document.createElement("span");

    span.className = "letter";
    span.textContent = character;
    span.setAttribute("data-char", character);
    span.style.setProperty("--i", index);
    span.setAttribute("aria-hidden", "true");

    title.appendChild(span);

  });

  title.setAttribute("aria-label", text);
  title.setAttribute("data-text", text);

});
