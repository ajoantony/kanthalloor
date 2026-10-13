const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const mobileMenu = document.querySelector(".mobile-menu");
const whatsappMenu = document.querySelector(".whatsapp-menu");

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("pageshow", () => {
    const navigation = performance.getEntriesByType("navigation")[0];

    if (navigation?.type === "reload" && !window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.removeAttribute("open");
    });
});

if (whatsappMenu) {
    const whatsappToggle = whatsappMenu.querySelector("summary");
    let closeTimer;

    const closeWhatsappMenu = ({ restoreFocus = false } = {}) => {
        if (!whatsappMenu.open || whatsappMenu.classList.contains("is-closing")) return;

        window.clearTimeout(closeTimer);

        if (reducedMotion.matches) {
            whatsappMenu.open = false;
            if (restoreFocus) whatsappToggle?.focus();
            return;
        }

        whatsappMenu.classList.add("is-closing");
        closeTimer = window.setTimeout(() => {
            whatsappMenu.open = false;
            whatsappMenu.classList.remove("is-closing");
            if (restoreFocus) whatsappToggle?.focus();
        }, 190);
    };

    whatsappToggle?.addEventListener("click", (event) => {
        if (whatsappMenu.open) {
            event.preventDefault();
            closeWhatsappMenu();
        }
    });

    document.addEventListener("pointerdown", (event) => {
        if (whatsappMenu.open && !whatsappMenu.contains(event.target)) {
            closeWhatsappMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && whatsappMenu.open) {
            event.preventDefault();
            closeWhatsappMenu({ restoreFocus: true });
        }
    });
}

if (!reducedMotion.matches) {
    const revealGroups = [
        ".intro-grid > *",
        ".nature-gallery-heading",
        ".nature-gallery-grid > *",
        ".section-heading > *",
        ".place-grid > *",
        ".experience-layout > *",
        ".stay-list > *",
        ".plan-grid > *"
    ];
    const revealElements = [...document.querySelectorAll(revealGroups.join(","))];

    revealElements.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(1.5rem)";
    });

    if (revealElements.length) {
        import("https://cdn.jsdelivr.net/npm/motion@13.4.0/+esm")
            .then(({ animate, inView }) => {
            revealElements.forEach((element) => {
                inView(
                    element,
                    () => {
                        const reveal = animate(
                            element,
                            {
                                opacity: [0, 1],
                                transform: ["translateY(1.5rem)", "translateY(0)"]
                            },
                            {
                                duration: 0.72,
                                ease: [0.22, 1, 0.36, 1]
                            }
                        );

                        reveal.finished.then(() => {
                            element.style.removeProperty("opacity");
                            element.style.removeProperty("transform");
                        });
                    },
                    { amount: 0.18, margin: "0px 0px -6% 0px" }
                );
            });
            })
            .catch(() => {
                revealElements.forEach((element) => {
                    element.style.removeProperty("opacity");
                    element.style.removeProperty("transform");
                });
            });
    }
}
