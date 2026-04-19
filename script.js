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

function renderMenu(category = 'all') {
    menuGrid.innerHTML = '';

    const filteredData = category === 'all'
        ? menuData
        : menuData.filter(item => item.category === category);

    filteredData.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';

        menuItem.innerHTML = `
            <div class="item-header">
                <h3 class="item-title">${item.title}</h3>
                <span class="item-price">${item.price}</span>
            </div>
            ${item.description ? `<p class="item-desc">${item.description}</p>` : ''}
        `;

        menuGrid.appendChild(menuItem);
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');
        menuGrid.style.opacity = '0';
        setTimeout(() => {
            renderMenu(category);
            menuGrid.style.opacity = '1';
        }, 250);
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
