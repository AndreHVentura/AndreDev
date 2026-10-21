document.addEventListener("DOMContentLoaded", () => {
  const icons = () => {
    if (window.lucide) window.lucide.createIcons();
  };
  const root = document.documentElement;
  const themeBtn = document.getElementById("themeToggle");
  function syncTheme() {
    const dark = root.dataset.theme === "dark";
    themeBtn.setAttribute("aria-pressed", String(dark));
    themeBtn.setAttribute(
      "aria-label",
      dark ? "Ativar tema claro" : "Ativar tema escuro",
    );
    themeBtn.innerHTML = `<i data-lucide="${dark ? "sun" : "moon"}" aria-hidden="true"></i>`;
    icons();
  }
  themeBtn.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("portfolio-theme", root.dataset.theme);
    } catch (e) {}
    syncTheme();
  });
  syncTheme();
  const menu = document.getElementById("menuBtn"),
    links = document.getElementById("nav-Links");
  const closeMenu = () => {
    links.hidden = true;
    menu.setAttribute("aria-expanded", "false");
  };
  menu.addEventListener("click", () => {
    const open = links.hidden;
    links.hidden = !open;
    menu.setAttribute("aria-expanded", String(open));
  });
  links
    .querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", closeMenu));
  document.addEventListener("click", (e) => {
    if (!menu.closest(".nav-dropdown").contains(e.target)) closeMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
  document.querySelectorAll(".projects-section").forEach((section) => {
    const slides = [...section.querySelectorAll(".carousel-item")];
    let index = 0;
    const count = section.querySelector(".carousel-count"),
      progress = section.querySelector(".carousel-progress span");
    function update() {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        slide.setAttribute("aria-hidden", String(i !== index));
      });
      count.textContent = `${index + 1} / ${slides.length}`;
      progress.style.width = `${((index + 1) / slides.length) * 100}%`;
    }
    section.querySelector(".carousel-prev").addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      update();
    });
    section.querySelector(".carousel-next").addEventListener("click", () => {
      index = (index + 1) % slides.length;
      update();
    });
    update();
    slides.forEach((slide) => {
      const main = slide.querySelector(".main-image");
      slide.querySelectorAll(".thumb").forEach((thumb) => {
        const select = () => {
          main.src = thumb.src;
          slide
            .querySelectorAll(".thumb")
            .forEach((t) => t.classList.toggle("active", t === thumb));
        };
        thumb.addEventListener("click", select);
        thumb.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            select();
          }
        });
      });
    });
  });
  const top = document.getElementById("scrollToTop");
  const onScroll = () => {
    top.style.display = window.scrollY > 250 ? "grid" : "none";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  top.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
  icons();

  document.querySelectorAll(".read-more-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const wrapper = button.parentElement;

      const content = wrapper.querySelector(".expandable-content");

      const isExpanded = content.classList.toggle("expanded");

      button.setAttribute("aria-expanded", String(isExpanded));

      const isEnglish = document.documentElement.lang === "en";

      button.firstChild.textContent = isExpanded
        ? isEnglish
          ? "Show less "
          : "Ler menos "
        : isEnglish
          ? "Read more "
          : "Ler mais ";
    });
  });
});
