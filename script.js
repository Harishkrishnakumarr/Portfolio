document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.querySelector('.overlay');

    // Toggle the menu and overlay when the hamburger is clicked
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        overlay.classList.toggle('show');
    });

    // Close the menu and overlay when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            overlay.classList.remove('show');
        });
    });

    // Close the menu and overlay when the overlay is clicked
    overlay.addEventListener('click', () => {
        navMenu.classList.remove('show');
        overlay.classList.remove('show');
    });
});