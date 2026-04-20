// Initialize Animations
AOS.init({
    duration: 1000,
    once: true
});

// Loader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }, 1000);
});

// Before/After Slider Logic
const slider = document.getElementById('slider');
const foregroundImg = document.querySelector('.foreground-img');

if(slider) {
    slider.addEventListener('input', (e) => {
        const sliderValue = e.target.value;
        foregroundImg.style.width = `${sliderValue}%`;
    });
}

// Lightbox Logic
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-lightbox');

galleryItems.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Sticky Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#000';
        nav.style.padding = '15px 8%';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
        nav.style.padding = '10px 2%';
    }
});

// Scroll to Top Button
const scrollBtn = document.getElementById('scrollTop');
window.onscroll = function() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

scrollBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});