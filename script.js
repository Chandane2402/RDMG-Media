document.addEventListener("DOMContentLoaded", function () {
    const services = document.querySelectorAll(".service");
    let index = 0;

    function showNextService() {
        services.forEach((service, i) => {
            service.classList.remove("active");
            if (i === index) {
                service.classList.add("active");
            }
        });

        index = (index + 1) % services.length; // Loop back after the last one
    }

    showNextService(); // Show the first service
    setInterval(showNextService, 3000); // Change service every 3 seconds
});
