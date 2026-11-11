
/* ==============================
   MOBILE NAVIGATION
============================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("show");

        const isOpen = navMenu.classList.contains("show");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

}


/* TUTUP MENU SETELAH LINK DIKLIK */

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("show");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* ==============================
   SCROLL REVEAL
============================== */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(function (element) {

        element.classList.add("show");

    });

}


/* ==============================
   CURRENT YEAR
============================== */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* ==============================
   ACTIVE NAVIGATION
============================== */

const sections = document.querySelectorAll(
    "section[id]"
);

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const currentId = entry.target.id;

                    navLinks.forEach(function (link) {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            "#" + currentId
                        ) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        },

        {
            threshold: 0.4
        }

    );

    sections.forEach(function (section) {

        sectionObserver.observe(section);

    });

}
