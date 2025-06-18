// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const nav = document.getElementById('nav');
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Menu móvil
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            nav.classList.remove('open');
            document.querySelector(link.getAttribute('href'))
                .scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Tema claro/oscuro
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        localStorage.setItem(
            'theme',
            body.classList.contains('dark') ? 'dark' : 'light'
        );
    });

    // Persistir preferencia
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
    }
});
