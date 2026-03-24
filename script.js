document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li');
    const body = document.body;

    // Eğer sayfada hamburger menü varsa çalıştır
    if (hamburger && navMenu) {
        // Hamburger tıklandığında menüyü aç/kapat
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('open');       // Hamburger animasyonu
            navMenu.classList.toggle('active');       // Nav fullscreen aç/kapat
            body.classList.toggle('no-scroll');       // Sayfa kaydırmayı engelle

            // Linkler animasyon
            navLinks.forEach((link, index) => {
                if(link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        });

        // Menü linklerine tıklandığında menüyü kapat
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if(navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('open');
                    body.classList.remove('no-scroll');

                    // Animasyonları sıfırla
                    navLinks.forEach(link => link.style.animation = '');
                }
            });
        });

        // ESC tuşu ile menüyü kapatma
        document.addEventListener('keydown', function(e) {
            if(e.key === "Escape" && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('open');
                body.classList.remove('no-scroll');

                // Animasyonları sıfırla
                navLinks.forEach(link => link.style.animation = '');
            }
        });
    }
});
