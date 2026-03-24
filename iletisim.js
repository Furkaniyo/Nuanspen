document.addEventListener('DOMContentLoaded', function() {
    // Çalışma Saatleri Toggle İşlemi
    const hoursToggle = document.querySelector('.hours-toggle');
    const hoursContent = document.querySelector('.hours-content');

    if (hoursToggle && hoursContent) {
        hoursToggle.addEventListener('click', () => {
            const isOpen = hoursContent.style.display === 'block';
            hoursContent.style.display = isOpen ? 'none' : 'block';
            hoursToggle.textContent = isOpen ? 'Detayları Gör' : 'Kapat';
        });
    }

    // Mesaj Formu Gönderme İşlemi
    const messageForm = document.querySelector('.message-form');
    if (messageForm) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mesajınız başarıyla gönderildi 👍');
            this.reset();
        });
    }
});
