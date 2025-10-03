// File: js/script.js

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Pastikan tombol dan menu ada sebelum menambahkan event listener
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            // Toggle class 'hidden' untuk menampilkan/menyembunyikan menu
            mobileMenu.classList.toggle('hidden');
        });
    }
});