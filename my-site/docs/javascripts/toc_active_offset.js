/*
  Optional: Material for MkDocs right-TOC active item offset adjustment.
  Use only if CSS scroll-margin-top does not sufficiently fix the active TOC timing.

  Behavior:
  - Checks headings in the article.
  - Treats the reading position as 35% from the top of the viewport.
  - Applies md-nav__link--active to the matching right-TOC item.
*/

(function () {
  const ACTIVE_CLASS = "md-nav__link--active";
  const OFFSET_RATIO = 0.20;

  function normalizeHash(hash) {
    if (!hash) return "";
    try {
      return decodeURIComponent(hash);
    } catch (_) {
      return hash;
    }
  }

  function updateActiveToc() {
    const article = document.querySelector(".md-content__inner");
    const secondary = document.querySelector(".md-sidebar--secondary");
    if (!article || !secondary) return;

    const headings = Array.from(
      article.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")
    );

    if (!headings.length) return;

    const referenceY = window.innerHeight * OFFSET_RATIO;

    let activeHeading = headings[0];
    for (const heading of headings) {
      const top = heading.getBoundingClientRect().top;
      if (top <= referenceY) {
        activeHeading = heading;
      } else {
        break;
      }
    }

    const activeHash = "#" + activeHeading.id;

    secondary
      .querySelectorAll("." + ACTIVE_CLASS)
      .forEach((link) => link.classList.remove(ACTIVE_CLASS));

    const activeLink = Array.from(
      secondary.querySelectorAll(".md-nav__link[href^='#']")
    ).find((link) => normalizeHash(link.getAttribute("href")) === normalizeHash(activeHash));

    if (activeLink) {
      activeLink.classList.add(ACTIVE_CLASS);
    }
  }

  let ticking = false;

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      updateActiveToc();
      ticking = false;
    });
  }

  document.addEventListener("DOMContentLoaded", updateActiveToc);
  document.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });
})();
