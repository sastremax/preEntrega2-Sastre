document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");
    menuToggle.addEventListener("click", function () {
        menuToggle.classList.toggle("active");
        navbar.classList.toggle("active");
        console.log("Menu toggle clickeado");
    });
});