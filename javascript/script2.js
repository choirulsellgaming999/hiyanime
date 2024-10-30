let currentIndex = 0;
let autoChangeInterval;

function changeSlide(n) {
    const images = document.querySelectorAll('.slider-images img');
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + n + images.length) % images.length;
    images[currentIndex].classList.add('active');
}

function startAutoChange() {
    autoChangeInterval = setInterval(() => changeSlide(1), 5000); 
}

function stopAutoChange() {
    clearInterval(autoChangeInterval);
}

window.onload = function() {
    const images = document.querySelectorAll('.slider-images img');
    images[0].classList.add('active'); // Set gambar pertama aktif
    startAutoChange();
};