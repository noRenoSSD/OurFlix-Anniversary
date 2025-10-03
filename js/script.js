document.addEventListener('DOMContentLoaded', function() {
    
    // =====================================
    // BAGIAN 1: KODE UNTUK MENU MOBILE
    // =====================================
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // =========================================================
    // BAGIAN 2: KODE UNTUK BACKGROUND SLIDESHOW DI HALAMAN JOURNEY
    // =========================================================
    const journeyBg = document.querySelector('.journey-background');
    if (journeyBg) {
        const images = [
            'images/FotoLaut3.jpg',
            'images/Dino1.jpg',
            'images/TaunBaru2.jpg',
            'images/Kotlam4.jpg',
            'images/ganteng.jpg'
        ];
        let currentIndex = 0;

        function changeBackground() {
            const nextImage = new Image();
            nextImage.src = images[(currentIndex + 1) % images.length];
            journeyBg.style.backgroundImage = `url('${images[currentIndex]}')`;
            currentIndex = (currentIndex + 1) % images.length;
        }
        changeBackground();
        setInterval(changeBackground, 7000);
    }

    // =========================================================
    // BAGIAN 3: KODE UNTUK LOGIKA POPUP DI HALAMAN WISHES
    // (BAGIAN INI YANG DIPINDAHKAN KE DALAM)
    // =========================================================
    function openPopup(popup) {
        if (popup == null) return;
        popup.classList.remove('hidden');
        setTimeout(() => {
            popup.classList.add('opacity-100');
            popup.querySelector('.popup-content').classList.add('scale-100');
        }, 10);
    }

    function closePopup(popup) {
        if (popup == null) return;
        popup.classList.remove('opacity-100');
        popup.querySelector('.popup-content').classList.remove('scale-100');
        setTimeout(() => {
            popup.classList.add('hidden');
        }, 300);
    }

    const wishButtons = document.querySelectorAll('[data-popup-target]');
    wishButtons.forEach(button => {
        button.addEventListener('click', () => {
            const popup = document.querySelector(button.dataset.popupTarget);
            openPopup(popup);
        });
    });

    const closeButtons = document.querySelectorAll('.close-popup');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const popup = button.closest('.popup-overlay');
            closePopup(popup);
        });
    });

    const popupOverlays = document.querySelectorAll('.popup-overlay');
    popupOverlays.forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closePopup(overlay);
            }
        });
    });

}); 