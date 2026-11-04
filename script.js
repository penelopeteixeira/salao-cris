document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

  const faqItems = document.querySelectorAll(".faq-item");
  const faqButtons = document.querySelectorAll(".faq-question");

  const floatingTrigger = document.querySelector(".floating-whatsapp-trigger");
  const floatingMenu = document.querySelector(".floating-whatsapp-menu");

  function closeMobileMenu() {
    if (!menuToggle || !mainNav) return;

    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  function openMobileMenu() {
    if (!menuToggle || !mainNav) return;

    mainNav.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
  }

  function toggleMobileMenu() {
    if (!menuToggle || !mainNav) return;

    const isOpen = mainNav.classList.contains("is-open");

    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMobileMenu);
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  function closeAllFaq() {
    faqItems.forEach((item) => {
      const button = item.querySelector(".faq-question");

      item.classList.remove("is-open");

      if (button) {
        button.setAttribute("aria-expanded", "false");
      }
    });
  }

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentItem = button.closest(".faq-item");
      const isOpen = currentItem.classList.contains("is-open");

      closeAllFaq();

      if (!isOpen) {
        currentItem.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  function closeFloatingMenu() {
    if (!floatingTrigger || !floatingMenu) return;

    floatingMenu.classList.remove("is-open");
    floatingTrigger.setAttribute("aria-expanded", "false");
  }

  function openFloatingMenu() {
    if (!floatingTrigger || !floatingMenu) return;

    floatingMenu.classList.add("is-open");
    floatingTrigger.setAttribute("aria-expanded", "true");
  }

  function toggleFloatingMenu() {
    if (!floatingTrigger || !floatingMenu) return;

    const isOpen = floatingMenu.classList.contains("is-open");

    if (isOpen) {
      closeFloatingMenu();
    } else {
      openFloatingMenu();
    }
  }

  if (floatingTrigger) {
    floatingTrigger.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFloatingMenu();
    });
  }

  if (floatingMenu) {
    floatingMenu.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }

  document.addEventListener("click", (event) => {
    const clickedInsideNav =
      mainNav?.contains(event.target) || menuToggle?.contains(event.target);

    if (!clickedInsideNav) {
      closeMobileMenu();
    }

    const clickedInsideFloating =
      floatingMenu?.contains(event.target) || floatingTrigger?.contains(event.target);

    if (!clickedInsideFloating) {
      closeFloatingMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
      closeFloatingMenu();
      closeAllFaq();
    }
  });

  function handleResize() {
    if (window.innerWidth > 860) {
      closeMobileMenu();
    }
  }

  window.addEventListener("resize", handleResize);

  if (header) {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 12) {
          header.classList.add("is-scrolled");
        } else {
          header.classList.remove("is-scrolled");
        }
      },
      { passive: true }
    );
  }
});