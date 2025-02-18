document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Service Animation
    const services = document.querySelectorAll(".service");
    let index = 0;

    function showNextService() {
        services.forEach((service, i) => {
            service.classList.remove("active");
            if (i === index) {
                service.classList.add("active");
            }
        });

        index = (index + 1) % services.length;
    }

    showNextService();
    setInterval(showNextService, 3000);
});


