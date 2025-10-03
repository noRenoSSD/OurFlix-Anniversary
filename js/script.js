document.addEventListener('DOMContentLoaded', function() {
    
    // BAGIAN 1: KODE UNTUK MENU MOBILE
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => { mobileMenu.classList.toggle('hidden'); });
    }

    // BAGIAN 2: KODE UNTUK BACKGROUND SLIDESHOW DI HALAMAN JOURNEY
    const journeyBg = document.querySelector('.journey-background');
    if (journeyBg) {
        const images = ['images/FotoLaut3.jpg', 'images/Dino1.jpg', 'images/TaunBaru2.jpg', 'images/Kotlam4.jpg', 'images/ganteng.jpg'];
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

    // BAGIAN 3: LOGIKA UNTUK EFEK BLUR SAAT POPUP AKTIF
    const pageWrapper = document.getElementById('page-wrapper');
    if (pageWrapper) {
        function handleHashChange() {
            if (window.location.hash.startsWith('#popup-')) {
                pageWrapper.classList.add('blur-active');
            } else {
                pageWrapper.classList.remove('blur-active');
            }
        }
        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
    }
    
    // BAGIAN 4: LOGIKA UNTUK TRANSISI ROKET
    const rocketButton = document.getElementById('rocket-transition');
    if (rocketButton && pageWrapper) {
        rocketButton.addEventListener('click', function(event) {
            event.preventDefault();
            const destinationUrl = this.href;
            pageWrapper.classList.add('page-lifting-off');
            rocketButton.classList.add('launching');
            setTimeout(() => { window.location.href = destinationUrl; }, 1500);
        });
    }

    // BAGIAN 5: LOGIKA UNTUK KURSOR DENGAN BUNTUT
    const followers = document.querySelectorAll('.cursor-follower');
    if (followers.length > 0) {
        const positions = Array(followers.length).fill(null).map(() => ({ x: 0, y: 0 }));
        window.addEventListener('mousemove', function(e) {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            positions[0] = { x: mouseX, y: mouseY };
            followers[0].style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            for (let i = 1; i < followers.length; i++) {
                positions[i].x += (positions[i - 1].x - positions[i].x) * 0.5;
                positions[i].y += (positions[i - 1].y - positions[i].y) * 0.5;
                followers[i].style.transform = `translate(${positions[i].x}px, ${positions[i].y}px)`;
                const scale = (followers.length - i) / followers.length;
                followers[i].style.transform += ` scale(${scale})`;
            }
        });
    }

    // BAGIAN 6: LOGIKA UNTUK GALERI FOTO DENGAN FLIP CARD
    const galleryGrid = document.getElementById('photo-gallery-grid');
    if (galleryGrid) {
        // ==> PENTING: LENGKAPI DAFTAR INI DENGAN SEMUA NAMA FILE FOTOMU!
        const allImageFiles = [
            // From batch 1 & 2
            'soto.jpeg', 'Gacoan.jpg', 'Bu Nur.jpeg', 'Baci.jpeg', 'JajanPleburan.jpg',
            'Parjo.jfif', 'Bunur.jfif', 'gacoan1.jfif',
            'FotoLaut3.jpg', 'Dino1.jpg', 'TaunBaru2.jpg', 'Kotlam4.jpg', 'ganteng.jpg',
            'Mangrovee.jpg', 'Mangrove3.jpg', 'CorouselHomeD1.JPG', 'CorouselHomeD2.JPG', 
            'CorouselHomeD3.jpg', 'AVAReno.jpg', 'Bukber2.jpg', 'Bukber3.jpg', 'Bukber4.jpg', 
            'CorouselHome1.JPG', 'CorouselHome2.JPG', 'CorouselHome3.JPG', 'Dino2.jpg', 
            'Dino3.jpg', 'Dino4.jpg', 'Dino5.jpg', 'Dino6.jpg', 'Fotobooth-terbaru.jpg', 
            'FotoBukberPitsa1.jpeg', 'FotoKecilAyukie.jpg', 'FotoLaut1.jpg', 'FotoLaut2.jpg', 
            'FotoLaut4.jpg', 'FotoLaut5.jpg', 'FotoLaut6.jpg', 'FotoRenoKecil.jpg', 
            'FotoTaunBaru1.jpeg', 'GeprekPetir.jpg', 'IMG_20241228_221640_155.jpg', 
            'IMG_20241228_221640_195.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', 
            '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg',
            'IMG_20241229_014918_834.jpg', 'IMG_20241229_014918_949.jpg', 'IMG_20250407_172649_784.jpg',
            'IMG_20250407_172653_591.jpg', 'IMG_20250408_221454_829.jpg', 'IMG_20250408_224628_466.jpg',
            'IMG_20250408_224638_474.jpg', 'IMG_20250410_183405_289.jpg', 'IMG_20250426_193341_408.jpg',
            'IMG_20250426_193403_437.jpg', 'IMG_20250426_222410_881.jpg', 'IMG_20250426_222413_339.jpg',
            'IMG_20250426_222629_770.jpg', 'IMG_20250524_215241_788.jpg', 'IMG_20250527_203453_117.jpg',
            'IMG_20250527_203513_638.jpg', 'IMG_20250527_203546_783.jpg', 'IMG_20250610_205318_228.jpg',
            'IMG_20250614_141510_877.jpg', 'IMG_20250614_141524_454.jpg', 'IMG_20250615_080549_141.jpg',
            'IMG_20250615_080604_370.jpg', 'IMG_20250615_081307_391.jpg', 'IMG_20250629_150408_620.jpg',
            'IMG_20250712_185741_599.jpg', 'IMG_20250712_185748_843.jpg', 'IMG_20250715_193726_014.jpg',
            'IMG_20250715_193728_857.jpg', 'IMG_20250715_193731_670.jpg', 'IMG_20250715_194035_848.jpg',
            'IMG_20250724_190103_413.jpg', 'IMG_20250728_182130_689.jpg', 'IMG_20250807_180128_979.jpg',
            'IMG_20250808_174546_079.jpg', 'IMG_20250808_174553_903.jpg', 'IMG_20250810_082620_974.jpg',
            'IMG_20250902_190102_577.jpg', 'IMG_20250902_191424_383.jpg', 'IMG_20250903_181433_674.jpg',
            'IMG_20250903_181702_289.jpg', 'IMG_20250904_210121_780.jpg', 'IMG_20250904_210204_951.jpg',
            'IMG_20250909_175710_874.jpg', 'IMG_20250918_183105_833.jpg', 'IMG_20250929_205152_881.jpg',
            'IMG_20250930_200203_945.jpg', 'IMG_20250930_200219_665.jpg',

            // From the latest batch
            'JajanPleburan.jpg', 'KOMPAKAYUKE3.jpg', 'KOMPAKAYUKIE2.jpg', 'Kotlam1.jpg',
            'Kotlam2.jpg', 'Kotlam3.jpg', 'Kotlam5.jpg', 'Mangrove.jpg', 'Mangrove2.jpg',
            'Mangrove4.jpg', 'Mangrove5.jpg', 'Mangrove6.jpg', 'Mangrove7.jpg',
            'PECCAYUKIE.jpg', 'PECCAYUKIE2.jpg', 'PhotoboothPECC1.JPG', 'PhotoboothPECC2.JPG',
            'PhotoboothPECC3.JPG', 'PhotoboothPECC4.JPG', 'PhotoboothPECC5.JPG', 'PhotoboothPECC6.JPG',
            'PhotoboothPECC7.JPG', 'PhotoboothPECC8.JPG', 'PhotoboothPECCFULL.jpg', 'photoboothputih1.jpg',
            'PhotoboothPutih2.gif', 'PhotoboothPutih3.jpg', 'PhotoboothPutih4.jpg', 'PhotoboothPutih5.jpg',
            'Sopong1.jpg', 'soto.jpeg', 'taunbaru.jpg', 'TaunBaru4.jpg',
            'IMG_20250930_200226_033.jpg', 'IMG_20250930_200227_383.jpg', 'IMG_20250930_200254_418.jpg',
            'IMG_20250930_200304_403.jpg', 'IMG_20250930_200305_848.jpg', 'IMG_20250930_200308_257.jpg',
            'IMG_20250930_200311_292.jpg', 'IMG_20250930_200314_116.jpg', 'IMG_20250930_200318_001.jpg',
            'IMG_20250930_200357_960.jpg', 'IMG_20250930_200402_844.jpg', 'IMG_20250930_200416_215.jpg'
        ];

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        const flipCards = document.querySelectorAll('.flip-card');
        const shuffledImages = shuffleArray([...allImageFiles]);

        flipCards.forEach((card, index) => {
            const imgElement = card.querySelector('.gallery-image-slot');
            if (shuffledImages[index]) {
                imgElement.src = `images/${shuffledImages[index]}`;
            } else {
                imgElement.src = `images/${shuffledImages[index % shuffledImages.length]}`;
            }
        });
        
        function updateRandomCard() {
            if (flipCards.length === 0 || allImageFiles.length < 2) return;
            const randomCardIndex = Math.floor(Math.random() * flipCards.length);
            const targetCard = flipCards[randomCardIndex];
            const targetImageElement = targetCard.querySelector('.gallery-image-slot');
            let newImageSrc;
            do {
                const randomImageFile = allImageFiles[Math.floor(Math.random() * allImageFiles.length)];
                newImageSrc = `images/${randomImageFile}`;
            } while (targetImageElement.src.includes(newImageSrc));
            targetCard.classList.add('is-flipping');
            setTimeout(() => {
                targetImageElement.src = newImageSrc;
            }, 400);
            setTimeout(() => {
                targetCard.classList.remove('is-flipping');
            }, 800);
        }

        function scheduleNextFlip() {
            updateRandomCard();
            const randomInterval = Math.random() * 4000 + 2000;
            setTimeout(scheduleNextFlip, randomInterval);
        }

        scheduleNextFlip();
        scheduleNextFlip();
    }
});