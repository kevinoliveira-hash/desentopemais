(function () {
    "use strict";

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav a");
    const sections = document.querySelectorAll("section[id]");
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim();

    function toggleMenu() {
        const isOpen = nav.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação");
    }

    function closeMenu() {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu de navegação");
    }

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", toggleMenu);
        navLinks.forEach(function (link) {
            link.addEventListener("click", closeMenu);
        });
        document.addEventListener("click", function (event) {
            const isClickInside = nav.contains(event.target) || menuToggle.contains(event.target);
            if (!isClickInside && nav.classList.contains("is-open")) {
                closeMenu();
            }
        });
    }

    function updateActiveLink() {
        const scrollPosition = window.scrollY + 100;
        sections.forEach(function (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(function (link) {
                    link.style.color = "";
                    if (link.getAttribute("href") === "#" + sectionId) {
                        link.style.color = primaryColor;
                    }
                });
            }
        });
    }

    let scrollTimeout;
    window.addEventListener("scroll", function () {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(updateActiveLink);
    });

    updateActiveLink();
})();