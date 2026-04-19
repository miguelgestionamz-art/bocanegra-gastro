// =============================================
// MENU DATA — Bocanegra Gastro Bar
// =============================================
const menuData = [
    // DE LA BARRA
    { id: 1, title: "Nachos con Pulled Pork", price: "15 €", description: "Nachos crujientes con pulled pork y guarniciones.", category: "barra" },
    { id: 2, title: "Tiras de Pollo Marinadas", price: "12,50 €", description: "Acompañadas de salsa miel y mostaza.", category: "barra" },
    { id: 3, title: "Bastones de Merluza en Tempura", price: "13 €", description: "Con salsa tártara casera.", category: "barra" },
    { id: 4, title: "Croquetas de Jamón (8 uds)", price: "12,50 €", description: "Croquetas caseras de jamón ibérico.", category: "barra" },
    { id: 5, title: "½ Croquetas de Jamón (4 uds)", price: "7 €", description: "Media ración de croquetas caseras.", category: "barra" },
    { id: 6, title: "Croquetas de Carabineros (8 uds)", price: "13,50 €", description: "Croquetas cremosas de carabineros.", category: "barra" },
    { id: 7, title: "½ Croquetas de Carabineros (4 uds)", price: "7,50 €", description: "Media ración de carabineros.", category: "barra" },
    { id: 8, title: "Provoletta al estilo Bocanegra", price: "14,50 €", description: "Queso provolone fundido con nuestro toque.", category: "barra" },
    { id: 9, title: "Anchoa del Cantábrico", price: "19 €", description: "Calidad premium con tomate rallado.", category: "barra" },
    { id: 10, title: "Huevos Estrellados con Gambas", price: "14 €", description: "Huevos de corral con gambas al ajillo.", category: "barra" },
    { id: 11, title: "Patatas Bravas con Torrezno", price: "14,50 €", description: "Con torrezno de Soria y huevo frito.", category: "barra" },
    { id: 12, title: "Oreja de Cerdo Frita", price: "14,50 €", description: "Sobre patata revolcona.", category: "barra" },
    { id: 13, title: "Pollo Teriyaki", price: "16 €", description: "Con verduras salteadas.", category: "barra" },

    // EN NUESTRO COMEDOR
    { id: 14, title: "Burrata", price: "16,50 €", description: "Cherrys confitados en AOVE, pesto de albahaca, brotes y tomates secos.", category: "comedor" },
    { id: 15, title: "Alcachofa Confitada", price: "18 €", description: "En AOVE, cremoso de patata y velo de jamón ibérico.", category: "comedor" },
    { id: 16, title: "Parrillada de Verduras", price: "18,50 €", description: "Con queso de cabra y reducción de vinagre balsámico.", category: "comedor" },
    { id: 17, title: "Chipirón sobre Panaderas", price: "16,50 €", description: "Con cebolla confitada.", category: "comedor" },
    { id: 18, title: "Pata de Pulpo", price: "19 €", description: "Sobre parmentier trufada.", category: "comedor" },
    { id: 19, title: "Tataki de Atún Rojo", price: "19 €", description: "Atún de primera calidad marcado a la perfección.", category: "comedor" },
    { id: 20, title: "Carrillera de Ternera", price: "17,50 €", description: "Estofada al vino tinto sobre puré de patata.", category: "comedor" },
    { id: 21, title: "Hamburguesa 100% Casera", price: "13,50 €", description: "Vacuno madurado con queso Scarmorza.", category: "comedor" },
    { id: 22, title: "Solomillo Strogonoff", price: "19,50 €", description: "Tierno solomillo con salsa Strogonoff.", category: "comedor" },
    { id: 23, title: "Chuleta de Simmental (1kg)", price: "65 €", description: "30 días de maduración, con guarnición.", category: "comedor" },

    // POSTRES
    { id: 24, title: "Postres Caseros del Día", price: "7 €", description: "Consulte las opciones disponibles con el equipo de sala.", category: "postres" }
];

// =============================================
// MENU RENDERING
// =============================================
const menuGrid = document.getElementById('menu-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderMenu(activeCategory = 'all') {
    menuGrid.innerHTML = '';

    const categories = [
        { id: 'barra', name: 'De la Barra', icon: 'fa-utensils' },
        { id: 'comedor', name: 'En nuestro Comedor', icon: 'fa-bowl-food' },
        { id: 'postres', name: 'Y para terminar (Postres)', icon: 'fa-cake-candles' }
    ];

    categories.forEach(cat => {
        // If filtering, only show relevant category or hide others
        if (activeCategory !== 'all' && activeCategory !== cat.id) return;

        const catAccordion = document.createElement('details');
        catAccordion.className = 'menu-accordion menu-category-accordion';
        catAccordion.id = `cat-${cat.id}`;
        // Open if filtered or if it's the first one in 'all' mode
        if (activeCategory !== 'all' || cat.id === 'barra') catAccordion.open = true;

        const items = menuData.filter(item => item.category === cat.id);
        
        let itemsHtml = items.map(item => `
            <div class="menu-item">
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
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');
        menuGrid.style.opacity = '0.3';
        setTimeout(() => {
            renderMenu(category);
            menuGrid.style.opacity = '1';
        }, 200);
    });
});

renderMenu();

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



