const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');  // X şekli
    navMenu.classList.toggle('active'); // Menü aç/kapa

    // Linkler animasyon
    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});