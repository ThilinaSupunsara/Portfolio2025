// Toggle mobile menu
document.getElementById('mobile-menu-button').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('active'); // Changed to 'active' for display control
});

// GSAP Animations
gsap.from('header', { duration: 1, y: -50, opacity: 0, ease: 'power2.out' });
gsap.from('.hero-section h1', { duration: 1, y: 50, opacity: 0, delay: 0.5, ease: 'power2.out' });
gsap.from('.hero-section p', { duration: 1, y: 50, opacity: 0, delay: 0.7, ease: 'power2.out' });
gsap.from('.animate-fade-in', { duration: 1, y: 50, opacity: 0, stagger: 0.3, ease: 'power2.out' });
gsap.from('footer', { duration: 1, y: 50, opacity: 0, ease: 'power2.out' });

// Additional GSAP animations for cards
gsap.from('.bulletin-card, .toolkit-card, .account-card, .legal-card', {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power2.out',
    delay: 1,
});

// Swiper Initialization
const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    on: {
        init: function () {
            gsap.from('.swiper-slide', {
                duration: 1,
                y: 50,
                opacity: 0,
                stagger: 0.2,
                ease: 'power2.out',
            });
        },
    },
});
