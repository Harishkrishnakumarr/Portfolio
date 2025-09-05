document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.querySelector('.overlay');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        overlay.classList.toggle('show');
    });

    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            overlay.classList.remove('show');
        });
    });

    overlay.addEventListener('click', () => {
        navMenu.classList.remove('show');
        overlay.classList.remove('show');
    });
});