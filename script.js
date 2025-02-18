document.addEventListener("DOMContentLoaded", function () {
    const services = document.querySelectorAll(".service");
    let index = 0;

    function showNextService() {
        services.forEach((service) => service.classList.remove("active"));
        services[index].classList.add("active");
        index = (index + 1) % services.length; // Loop infinitely
    }

    showNextService(); // Show the first service
    setInterval(showNextService, 3000); // Change service every 3 seconds
});
