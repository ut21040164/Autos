const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Cambiar el color de fondo del navbar al hacer scroll
window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Abrir y cerrar el menú de navegación en dispositivos móviles
burger.addEventListener('click', function () {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});
