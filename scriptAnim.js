document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger-menu");
    const nav = document.querySelector(".nav-links");
    const closeBtn = document.querySelector(".close-menu");

    burger.addEventListener("click", () => {
        nav.classList.add("open");
    });

    closeBtn.addEventListener("click", () => {
        nav.classList.remove("open");
    });

    burger.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          nav.classList.add("open");
        }
      });

    // Fermer le menu quand on clique sur un lien
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
        });
    });


    // ANIMATION AU SCROLL
    const sections = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));

    // PARALLAX DYNAMIQUE
    window.addEventListener("scroll", () => {
        const parallax = document.querySelector(".parallax");
        let scrollPosition = window.scrollY;
        parallax.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
    // Sélection des éléments
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");

    // Fonction de validation d'email
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Écouteur d'événement sur la perte du focus
    emailInput.addEventListener("blur", () => {
        if (!validateEmail(emailInput.value)) {
            emailInput.classList.add("input-error");
            emailError.style.display = "block"; // Affiche le message d'erreur
        } else {
            emailInput.classList.remove("input-error");
            emailError.style.display = "none"; // Cache le message si l'email est valide
        }
    });

    // Suppression de l'erreur quand l'utilisateur tape
    emailInput.addEventListener("input", () => {
        emailInput.classList.remove("input-error");
        emailError.style.display = "none";
    });
     
    // ANIMATION DES BOUTONS AU HOVER
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.1)";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });
});