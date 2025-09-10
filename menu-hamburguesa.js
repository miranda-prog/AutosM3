// Agrega esto al final de tu archivo JS principal
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav.menu');
const overlay = document.querySelector('.menu-overlay');

function closeMenu() {
    menu.classList.remove('open');
    overlay.classList.remove('active');
    document.body.classList.remove('menu-open');
}

hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Cierra al hacer click fuera del menú
overlay.addEventListener('click', closeMenu);

// Opcional: cierra al hacer click en un link del menú
menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});