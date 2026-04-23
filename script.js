// =============================================
// MODAL RESERVA
// =============================================
function openReserveModal() {
    document.getElementById('reserve-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeReserveModal(e) {
    if (e && e.target !== document.getElementById('reserve-modal')) return;
    document.getElementById('reserve-modal').classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeReserveModal();
});

// =============================================
// MENU DATA — Bocanegra Gastro Bar
// =============================================
const menuData = [
    // DE LA BARRA
    { id: 1, title: "Nachos con pulled pork", price: "15 €", description: "Nachos crujientes con pulled pork.", category: "barra" },
    { id: 2, title: "Tiras de pollo marinadas", price: "12,50 €", description: "Acompañadas de salsa miel y mostaza.", category: "barra" },
    { id: 3, title: "Bastones de merluza en tempura", price: "13 €", description: "Con salsa tártara casera.", category: "barra" },
    { id: 4, title: "Croquetas de jamón (8 uds)", price: "12,50 €", description: "Croquetas caseras de jamón.", category: "barra" },
    { id: 5, title: "½ Croquetas de jamón (4 uds)", price: "7 €", description: "Media ración de croquetas de jamón.", category: "barra" },
    { id: 6, title: "Croquetas de carabineros (8 uds)", price: "13,50 €", description: "Croquetas de carabineros.", category: "barra" },
    { id: 7, title: "½ Croquetas de carabineros (4 uds)", price: "7,50 €", description: "Media ración de croquetas de carabineros.", category: "barra" },
    { id: 8, title: "Provoletta al estilo Bocanegra", price: "14,50 €", description: "Queso provolone fundido al estilo Bocanegra.", category: "barra" },
    { id: 9, title: "Huevos estrellados con gambas al ajillo", price: "14 €", description: "Huevos estrellados con gambas al ajillo.", category: "barra" },
    { id: 10, title: "Patatas bravas con torrezno", price: "14,50 €", description: "Con torrezno de Soria y huevo frito.", category: "barra" },
    { id: 11, title: "Oreja de cerdo frita", price: "14,50 €", description: "Sobre patata revolcona.", category: "barra" },
    { id: 12, title: "Pollo teriyaki", price: "16 €", description: "Con verduras salteadas.", category: "barra" },

    // EN NUESTRO COMEDOR
    { id: 13, title: "Burrata", price: "16,50 €", description: "Con tomates cherrys confitados en AOVE, pesto de albahaca, brotes verdes y tomates secos.", category: "comedor" },
    { id: 14, title: "Parrillada de verduras", price: "18,50 €", description: "Con queso de cabra y reducción de vinagre balsámico.", category: "comedor" },
    { id: 15, title: "Chipirón sobre panaderas", price: "16,50 €", description: "Y cebolla confitada.", category: "comedor" },
    { id: 16, title: "Hamburguesa de vacuno", price: "13,50 €", description: "Madurada 100% casera con queso Scarmorza.", category: "comedor" },

    // POSTRES
    { id: 17, title: "Para terminar", price: "7 €", description: "Siempre hay un final dulce... consulte nuestros postres caseros.", category: "postres" },

    // TERRAZA
    { id: 18, title: "Nachos con pulled pork", price: "15 €", description: "Nachos crujientes con pulled pork.", category: "terraza" },
    { id: 19, title: "Tiras de pollo marinadas", price: "12,50 €", description: "Acompañadas de salsa miel y mostaza.", category: "terraza" },
    { id: 20, title: "Bastones de merluza en tempura", price: "13 €", description: "Con salsa tártara casera.", category: "terraza" },
    { id: 21, title: "Croquetas de jamón (8 uds)", price: "12,50 €", description: "Croquetas caseras de jamón.", category: "terraza" },
    { id: 22, title: "½ Croquetas de jamón (4 uds)", price: "7 €", description: "Media ración de croquetas de jamón.", category: "terraza" },
    { id: 23, title: "Croquetas de carabineros (8 uds)", price: "13,50 €", description: "Croquetas de carabineros.", category: "terraza" },
    { id: 24, title: "½ Croquetas de carabineros (4 uds)", price: "7,50 €", description: "Media ración de croquetas de carabineros.", category: "terraza" },
    { id: 25, title: "Provoletta al estilo Bocanegra", price: "14,50 €", description: "Queso provolone fundido al estilo Bocanegra.", category: "terraza" },
    { id: 26, title: "Huevos estrellados con gambas al ajillo", price: "14 €", description: "Huevos estrellados con gambas al ajillo.", category: "terraza" },
    { id: 27, title: "Patatas bravas con torrezno", price: "14,50 €", description: "Con torrezno de Soria y huevo frito.", category: "terraza" },
    { id: 28, title: "Oreja de cerdo frita", price: "14,50 €", description: "Sobre patata revolcona.", category: "terraza" },
    { id: 29, title: "Pollo teriyaki", price: "16 €", description: "Con verduras salteadas.", category: "terraza" },
    { id: 30, title: "Burrata con tomates cherrys", price: "16,50 €", description: "Confitados en AOVE, pesto de albahaca, brotes verdes y tomates secos.", category: "terraza" },
    { id: 31, title: "Parrillada de verduras", price: "18,50 €", description: "Con queso de cabra y reducción de vinagre balsámico.", category: "terraza" },
    { id: 32, title: "Chipirón sobre panaderas", price: "16,50 €", description: "Y cebolla confitada.", category: "terraza" },
    { id: 33, title: "Hamburguesa de vacuno madurada", price: "13,50 €", description: "100% casera con queso Scarmorza.", category: "terraza" },
    { id: 34, title: "Postres caseros", price: "7 €", description: "Siempre hay un final dulce... consulte nuestros postres caseros.", category: "terraza" }
];

// =============================================
// MENU RENDERING
// =============================================
const menuGrid = document.getElementById('menu-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderMenu(activeCategory = 'all') {
    // Add fading class
    menuGrid.classList.add('filtering');
    
    setTimeout(() => {
        menuGrid.innerHTML = '';

        const categories = [
            { id: 'terraza', name: 'La Terraza de Bocanegra', icon: 'fa-sun' },
            { id: 'barra', name: 'De la Barra', icon: 'fa-utensils' },
            { id: 'comedor', name: 'En nuestro Comedor', icon: 'fa-bowl-food' },
            { id: 'postres', name: 'Y para terminar (Postres)', icon: 'fa-cake-candles' }
        ];

        categories.forEach(cat => {
            if (activeCategory !== 'all' && activeCategory !== cat.id) return;

            const catAccordion = document.createElement('details');
            catAccordion.className = 'menu-accordion menu-category-accordion';
            catAccordion.id = `cat-${cat.id}`;
            if (activeCategory !== 'all' || cat.id === 'terraza') catAccordion.open = true;

            const items = menuData.filter(item => item.category === cat.id);
            
            let itemsHtml = items.map((item, index) => `
                <div class="menu-item" style="animation-delay: ${index * 0.05}s">
                    <div class="item-header">
                        <h3 class="item-title">${item.title}</h3>
                        <span class="item-price">${item.price}</span>
                    </div>
                    ${item.description ? `<p class="item-desc">${item.description}</p>` : ''}
                </div>
            `).join('');

            catAccordion.innerHTML = `
                <summary class="accordion-header">
                    <span class="header-text"><i class="fa-solid ${cat.icon}"></i> ${cat.name}</span>
                    <i class="fa-solid fa-chevron-down toggle-icon"></i>
                </summary>
                <div class="accordion-content">
                    <div class="category-items">
                        ${itemsHtml}
                    </div>
                </div>
            `;

            menuGrid.appendChild(catAccordion);
        });

        // Remove fading class
        menuGrid.classList.remove('filtering');
    }, 300);
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('active')) return;
        
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');
        renderMenu(category);
    });
});

renderMenu('terraza');

// =============================================
// NAVIGATION
// =============================================
const mainNav = document.getElementById('main-nav');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

// Scroll effect — sticky nav background
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        mainNav.classList.add('scrolled');
    } else {
        mainNav.classList.remove('scrolled');
    }
});

// Mobile hamburger toggle
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// =============================================
// HERO SLIDER LOGIC
// =============================================
const slides = document.querySelectorAll('.hero-slider .slide');
const dotsContainer = document.getElementById('slider-dots');
let currentSlide = 0;
let sliderInterval;

function initSliderDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
}

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
        if (index === currentSlide) {
            slide.style.animation = 'none';
            slide.offsetHeight; // reflow para resetear la animación
            slide.style.animation = '';
        }
    });

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
    resetInterval();
}

function resetInterval() {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, 6000); // 6s per slide
}

if (slides.length > 0) {
    initSliderDots();
    resetInterval();
}

// =============================================
// SCROLL REVEAL ANIMATIONS
// =============================================
const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.slide-in-bottom').forEach(el => {
    revealObserver.observe(el);
});

// =============================================
// DISHES CAROUSEL LOGIC (INFINITE LOOP)
// =============================================
const track = document.getElementById('carousel-track');
const prevBtn = document.getElementById('prev-dish');
const nextBtn = document.getElementById('next-dish');
let cards = Array.from(document.querySelectorAll('.dish-card'));

let carouselIndex = 0;
let isTransitioning = false;

function initInfiniteCarousel() {
    if (!track || cards.length === 0) return;

    const visibleCards = getVisibleCards();
    
    // Clone first and last items for infinite feel
    for (let i = 0; i < visibleCards; i++) {
        const firstClone = cards[i].cloneNode(true);
        const lastClone = cards[cards.length - 1 - i].cloneNode(true);
        track.appendChild(firstClone);
        track.insertBefore(lastClone, cards[0]);
    }

    // Refresh cards list including clones
    const allCards = document.querySelectorAll('.dish-card');
    carouselIndex = visibleCards; // Start at the first real card
    
    updateCarousel(false); // Init without transition

    nextBtn.addEventListener('click', () => {
        if (isTransitioning) return;
        carouselIndex++;
        updateCarousel(true);
    });

    prevBtn.addEventListener('click', () => {
        if (isTransitioning) return;
        carouselIndex--;
        updateCarousel(true);
    });

    track.addEventListener('transitionend', () => {
        isTransitioning = false;
        const totalCards = document.querySelectorAll('.dish-card').length;
        const visibleCards = getVisibleCards();

        if (carouselIndex >= totalCards - visibleCards) {
            track.style.transition = 'none';
            carouselIndex = visibleCards;
            updateCarousel(false);
        } else if (carouselIndex <= 0) {
            track.style.transition = 'none';
            carouselIndex = totalCards - visibleCards - 1;
            updateCarousel(false);
        }
    });
}

function getVisibleCards() {
    if (window.innerWidth <= 650) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
}

function updateCarousel(withTransition = true) {
    const allCards = document.querySelectorAll('.dish-card');
    if (allCards.length === 0) return;

    const cardWidth = allCards[0].offsetWidth;
    const gap = 24; 
    const moveDistance = (cardWidth + gap) * carouselIndex;
    
    if (withTransition) {
        isTransitioning = true;
        track.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    } else {
        track.style.transition = 'none';
    }
    
    track.style.transform = `translateX(-${moveDistance}px)`;
}

window.addEventListener('resize', () => {
    const visibleCards = getVisibleCards();
    // Only reset if number of visible cards changes or after a debounce
    updateCarousel(false);
});

/* ═══════════ CLUB CAROUSEL ═══════════ */
function initClubCarousel() {
    const clubCarousel = document.getElementById('club-carousel');
    if (!clubCarousel) return;

    const slides = clubCarousel.querySelectorAll('.club-slide');
    let currentIndex = 0;

    if (slides.length <= 1) return;

    function nextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }

    setInterval(nextSlide, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
    // Hero Slider (already defined usually but ensuring it runs)
    if (typeof initHeroSlider === 'function') initHeroSlider();
    
    // Dishes Carousel
    if (document.getElementById('carousel-track')) {
        setTimeout(initInfiniteCarousel, 100);
    }
    
    // Club Carousel
    initClubCarousel();

    // Smooth scroll for nav
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === "#") return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});



