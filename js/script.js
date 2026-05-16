// ========================================
// MOBILE MENU
// ========================================
const menu = document.querySelector('.menu');
const carttap = document.querySelector('.carttap');
const list = document.querySelector('.list');
const listcards = document.querySelector('.listcards');
const quantityElements = document.querySelectorAll('.quantity');
const totalElement = document.querySelector('.total');

function showmenu() {
    if (menu) menu.style.display = 'flex';
}

function hidemenu() {
    if (menu) menu.style.display = 'none';
}

function closeCart() {
    if (carttap) carttap.style.display = 'none';
}

function openCart() {
    if (carttap) carttap.style.display = 'grid';
}

// ========================================
// HERO SLIDER
// ========================================
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('sliderDots');
const nextBtn = document.getElementById('nextSlide');
const prevBtn = document.getElementById('prevSlide');
let currentSlide = 0;
let slideInterval;

const heroImages = [
    'images/1.jfif',
    'images/2.jpeg',
    'images/3.jpeg'
];

if (slides.length > 0) {
    slides.forEach((slide, index) => {
        const img = slide.querySelector('img');
        if (img && heroImages[index]) {
            img.src = heroImages[index];
        }
    });
}

if (dotsContainer && slides.length > 0) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });
}

const dots = document.querySelectorAll('.dot');

function goToSlide(n) {
    if (slides.length === 0) return;
    slides[currentSlide]?.classList.remove('active');
    if (dots[currentSlide]) dots[currentSlide]?.classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide]?.classList.add('active');
    if (dots[currentSlide]) dots[currentSlide]?.classList.add('active');
}

function startAutoSlide() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(() => goToSlide(currentSlide + 1), 4000);
}

function stopAutoSlide() {
    if (slideInterval) clearInterval(slideInterval);
}

if (nextBtn && prevBtn && slides.length > 0) {
    const newNextBtn = nextBtn.cloneNode(true);
    const newPrevBtn = prevBtn.cloneNode(true);
    nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
    prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
    
    newNextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
        stopAutoSlide();
        startAutoSlide();
    });
    newPrevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
        stopAutoSlide();
        startAutoSlide();
    });
    
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mouseenter', stopAutoSlide);
        hero.addEventListener('mouseleave', startAutoSlide);
    }
    
    startAutoSlide();
}

// ========================================
// PRODUCTS DATA
// ========================================
let products = [
    {
        id: 1,
        name: 'SOUNDCORE',
        brand: 'Anker',
        name2: "Soundcore R60i NC - 6 Mics Real-time ANC - Adaptive Noise Cancelling - Hi-Res Audio",
        shortDesc: "Soundcore by Anker R60i NC headphones with 6 microphones, real-time adaptive noise cancellation, and Hi-Res certified sound quality",
        image: 'images/R60i.jpg',
        images: [
            'images/R60i.jpg',
            'images/R60i1.jpg',
            'images/R60i2.jpg',
            'images/R60i3.jpg',
        ],
        last: 2500,
        price: 1800,
        category: 'Audio',
        specs: [
            '6-Mics for crystal clear calls',
            'Real-time Adaptive Noise Cancellation',
            'Hi-Res Audio certified',
            'Up to 40 hours battery life',
            'Fast charging - 10 min = 4 hours playtime',
            'Multi-point connection'
        ]
    },
    {
        id: 2,
        name: 'Backpack',
        brand: 'Hoxury',
        name2: "Anti-Theft Waterproof Laptop Backpack with USB Charging Port",
        shortDesc: "Durable and secure anti-theft backpack with built-in USB charging port, multiple organized compartments, and comfortable padded straps.",
        image: 'images/Backpack.webp',
        images: [
            'images/Backpack.webp',
            'images/Backpack1.webp',
            'images/Backpack2.webp',
            'images/Backpack3.webp',
        ],
        last: 1000,
        price: 400,
        category: 'Accessories',
        specs: [
            'Anti-theft secure zipper design',
            'Built-in USB charging port for devices',
            'Water-resistant & durable material',
            'Multiple compartments for easy organization',
            'Padded shoulder straps for comfort',
            'Lightweight and compact design',
            'Easy to clean and maintain',
            'Fits easily in lockers or under seats'
        ],
    },
    {
        id: 3,
        name: 'REDRAGON',
        brand: 'Redragon',
        name2: "K617 Fizz Wired RGB Mechanical Gaming Keyboard",
        shortDesc: "Compact 60% mechanical keyboard with hot-swappable red switches, customizable RGB lighting, and professional software for key bindings.",
        image: 'images/Redragon.jpg',
        images: [
            'images/Redragon.jpg',
            'images/Redragon1.jpg',
            'images/Redragon2.jpg',
            'images/Redragon3.jpg'
        ],
        last: 2500,
        price: 1800,
        category: 'Computers',
        specs: [
            '60% Compact Design (61 keys) - Saves desk space',
            'Hot-swappable Red Mechanical Switches (quiet & smooth)',
            '20 Customizable RGB Lighting Modes',
            'Professional software for key binding customization',
            'Perfect for FPS games and productive work',
            'Durable and responsive performance',
            'Detachable USB-C cable'
        ],
    },
    {
        id: 4,
        name: 'ORAIMO',
        brand: 'Oraimo',
        name2: "PowerDock 15W Magnetic Wireless Charger - OWH-1151",
        shortDesc: "Sleek and portable 15W magnetic wireless charger with stainless steel anti-fall material, 9-layer smart protection, and 1m USB-C cable.",
        image: 'images/Oraimo.webp',
        images: [
            'images/Oraimo.webp',
            'images/Oraimo1.webp',
            'images/Oraimo2.webp',
            'images/Oraimo3.webp',
        ],
        last: 800,
        price: 499,
        category: 'Electronics',
        specs: [
            '15W Fast Wireless Charging',
            'Magnetic Alignment for easy attachment',
            'Sleek, portable & magnetic design',
            'Stainless steel anti-fall material',
            'Works with most phone cases',
            '9-Layer smart protection with temperature control',
            'Input: 5V⎓3A, 9V⎓2.2A, 12V⎓1.67A',
            'Output: 5W / 7.5W / 15W',
            'Includes 1m 60W USB-C to USB-C cable',
            'Compatible with iPhone and other phones (TECNO, Infinix, etc.)'
        ],
    },
    {
        id: 5,
        name: 'X8 ULTRA',
        brand: 'Smartwatches',
        name2: "X8 Ultra Smartwatch - High Performance 2.0\" HD Screen, Bluetooth Call, Heart Rate Monitor",
        shortDesc: "Premium smartwatch with 2.0-inch HD display, Bluetooth calling, 24/7 heart rate monitoring, multiple sports modes, and long battery life.",
        image: 'images/x8 ultra.jpg',
        images: [
            'images/x8 ultra.jpg',
            'images/x8 ultra1.jpg',
            'images/x8 ultra2.jpg'
        ],
        last: 2000,
        price: 1499,
        category: 'Smartwatches',
        specs: [
            '2.0-inch HD Full Touch Screen',
            'Bluetooth Calling Support',
            '24/7 Heart Rate Monitoring',
            'Blood Oxygen (SpO2) Monitor',
            'Sleep Tracking & Analysis',
            'Multiple Sports Modes',
            'IP67 Water Resistant',
            'Long Battery Life (5-7 days)',
            'Compatible with iOS & Android',
            'Customizable Watch Faces'
        ],
    },
];

let bestsellers = [2, 4, 5];
let cartItems = [];

let isHomepageRendered = false;
let isBestsellersRendered = false;
let isProductsGridRendered = false;

function loadCart() {
    const savedCart = localStorage.getItem('Techno_cart');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
        reloadCart();
    }
}

function saveCart() {
    localStorage.setItem('Techno_cart', JSON.stringify(cartItems));
}

function getProductById(id) {
    return products.find(p => p.id === id);
}

function updateCartQuantityDisplay() {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.quantity').forEach(el => {
        if (el) el.innerText = totalItems;
    });
}

function renderProducts() {
    if (!list || isHomepageRendered) return;
    
    list.innerHTML = '';
    
    products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.classList.add('item', 'reveal-scale');
        
        let badgeHtml = '';
        if (bestsellers.includes(product.id)) {
            badgeHtml = '<div class="badge bestseller">⭐ Bestseller</div>';
        } else if (product.last - product.price > 500) {
            badgeHtml = '<div class="badge">🔥 Sale</div>';
        }
        
        productCard.innerHTML = badgeHtml + `
            <a href="product-details.html?id=${product.id}"><img src="${product.image}" alt="${product.name2}" loading="lazy"></a>
            <div class="title"><h4>${product.name}</h4></div>
            <div><a href="product-details.html?id=${product.id}" class="prg">${product.name2}</a></div>
            <div class="price">
                <span class="last1">${product.last.toLocaleString()} EGP</span> 
                ${product.price.toLocaleString()} EGP
            </div>
            <button class="btn2" onclick="addToCart(${product.id})">🛒 Add to Cart</button>
        `;
        list.appendChild(productCard);
    });
    
    isHomepageRendered = true;
}

function renderBestsellers() {
    const bestsellersContainer = document.getElementById('bestsellers-grid');
    if (!bestsellersContainer || isBestsellersRendered) return;
    
    bestsellersContainer.innerHTML = '';
    const bestsellerProducts = products.filter(p => bestsellers.includes(p.id));
    
    bestsellerProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card', 'reveal-scale');
        productCard.style.transitionDelay = `${index * 0.1}s`;
        
        productCard.innerHTML = `
            <div class="badge bestseller">⭐ Bestseller</div>
            <a href="product-details.html?id=${product.id}"><img src="${product.image}" alt="${product.name2}" loading="lazy"></a>
            <h3>${product.name}</h3>
            <div><a href="product-details.html?id=${product.id}" class="prg">${product.name2}</a></div>
            <div class="price">
                <span class="last1">${product.last.toLocaleString()} EGP</span> 
                ${product.price.toLocaleString()} EGP
            </div>
            <button class="details-btn" onclick="addToCart(${product.id})">🛒 Add to Cart</button>
        `;
        bestsellersContainer.appendChild(productCard);
    });
    
    isBestsellersRendered = true;
}

function renderProductsGrid() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid || isProductsGridRendered) return;
    
    productsGrid.innerHTML = '';
    
    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card', 'reveal-scale');
        productCard.style.transitionDelay = `${index * 0.05}s`;
        productCard.setAttribute('data-category', product.category);
        productCard.setAttribute('data-name', product.name.toLowerCase());
        productCard.setAttribute('data-brand', product.brand.toLowerCase());
        
        productCard.innerHTML = `
            <a href="product-details.html?id=${product.id}"><img src="${product.image}" alt="${product.name2}" loading="lazy"></a>
            <h3>${product.name} - ${product.brand}</h3>
            <div><a href="product-details.html?id=${product.id}" class="prg">${product.name2}</a></div>
            <div class="price">
                <span class="last1">${product.last.toLocaleString()} EGP</span> 
                ${product.price.toLocaleString()} EGP
            </div>
            <button class="details-btn" onclick="viewProductDetails(${product.id})">📋 View Details</button>
            <button class="btn2" onclick="addToCart(${product.id})" style="margin-top: 0;">🛒 Add to Cart</button>
        `;
        productsGrid.appendChild(productCard);
    });
    
    isProductsGridRendered = true;
}

function viewProductDetails(id) {
    window.location.href = `product-details.html?id=${id}`;
}

function addToCart(productId) {
    const product = getProductById(productId);
    if (!product) return;
    
    const existingItem = cartItems.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    reloadCart();
    showNotification('✓ Added to cart!');
}

function reloadCart() {
    if (listcards) {
        listcards.innerHTML = '';
        let totalItems = 0;
        let totalPrice = 0;
        
        cartItems.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            totalItems += item.quantity;
            totalPrice += itemTotal;
            
            const cartItem = document.createElement('li');
            cartItem.innerHTML = `
                <div><img src="${item.image}" alt="${item.name2}"></div>
                <div><strong>${item.name}</strong><br><small>${item.name2.substring(0, 25)}</small></div>
                <div>${item.price.toLocaleString()} EGP</div>
                <div>
                    <button onclick="updateQuantity(${index}, ${item.quantity - 1})">-</button>
                    <div class="count">${item.quantity}</div>
                    <button onclick="updateQuantity(${index}, ${item.quantity + 1})">+</button>
                </div>
            `;
            listcards.appendChild(cartItem);
        });
        
        if (totalElement) {
            totalElement.innerText = totalPrice.toLocaleString();
        }
        
        updateCartQuantityDisplay();
    }
    
    saveCart();
}

function updateQuantity(cartIndex, newQuantity) {
    if (newQuantity <= 0) {
        cartItems.splice(cartIndex, 1);
    } else {
        cartItems[cartIndex].quantity = newQuantity;
    }
    reloadCart();
}

function removeFromCart(cartIndex) {
    cartItems.splice(cartIndex, 1);
    reloadCart();
    showNotification('Item removed from cart');
}

function setupSearchFilter() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    
    if (!searchInput || !categoryFilter) return;
    
    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const category = categoryFilter.value;
        const productCards = document.querySelectorAll('#productsGrid .product-card');
        productCards.forEach(card => {
            const name = card.getAttribute('data-name') || '';
            const brand = card.getAttribute('data-brand') || '';
            const cardCategory = card.getAttribute('data-category') || '';
            const matchesSearch = name.includes(searchTerm) || brand.includes(searchTerm);
            const matchesCategory = category === 'all' || cardCategory === category;
            card.style.display = matchesSearch && matchesCategory ? 'block' : 'none';
        });
    }
    
    searchInput.removeEventListener('input', filterProducts);
    categoryFilter.removeEventListener('change', filterProducts);
    
    searchInput.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
}

function handleLogin(event) {
    event.preventDefault();
    showNotification('✅ Login successful! Welcome back!');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
    return false;
}

function handleContact(event) {
    event.preventDefault();
    showNotification('✅ Message sent successfully! We will contact you soon.');
    event.target.reset();
    return false;
}

function handleCheckout(event) {
    event.preventDefault();
    if (cartItems.length === 0) {
        showNotification('❌ Your cart is empty! Add some products first.');
        return false;
    }
    showNotification('✅ Order placed successfully! Thank you for shopping with Techno Store!');
    localStorage.removeItem('Techno_cart');
    cartItems = [];
    reloadCart();
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
    return false;
}

function showNotification(message) {
    const existingNotif = document.querySelector('.custom-notification');
    if (existingNotif) existingNotif.remove();
    
    const notification = document.createElement('div');
    notification.className = 'custom-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        z-index: 10000;
        animation: fadeInOut 2s ease;
        font-weight: 600;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification) notification.remove();
    }, 2000);
}

function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (productId && document.querySelector('.product-details')) {
        const product = getProductById(productId);
        if (product) {
            const nameEl = document.querySelector('#productName');
            const priceEl = document.querySelector('#productPrice');
            const descEl = document.querySelector('#productDesc');
            const specsList = document.querySelector('#productSpecs');
            const addBtn = document.querySelector('#addToCartBtn');
            const mainImage = document.querySelector('#mainImage');
            const thumbnailContainer = document.querySelector('#thumbnailContainer');
            
            if (nameEl) nameEl.innerHTML = `${product.name} - ${product.brand}`;
            if (priceEl) priceEl.innerHTML = `${product.price.toLocaleString()} EGP`;
            if (descEl) descEl.innerHTML = product.shortDesc || product.name2;
            if (mainImage) mainImage.src = product.images ? product.images[0] : product.image;
            
            if (specsList) {
                specsList.innerHTML = product.specs.map(spec => `<li>✓ ${spec}</li>`).join('');
            }
            
            if (addBtn) {
                addBtn.onclick = () => addToCart(product.id);
            }
            
            if (thumbnailContainer && product.images && product.images.length > 0) {
                thumbnailContainer.innerHTML = '';
                product.images.forEach((img, idx) => {
                    const thumb = document.createElement('div');
                    thumb.classList.add('thumbnail');
                    if (idx === 0) thumb.classList.add('active');
                    thumb.innerHTML = `<img src="${img}" alt="Thumbnail ${idx + 1}">`;
                    thumb.onclick = () => {
                        if (mainImage) mainImage.src = img;
                        document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                        thumb.classList.add('active');
                    };
                    thumbnailContainer.appendChild(thumb);
                });
            }
            
            document.title = `${product.name} ${product.brand} | Techno Store`;
        }
    }
}

function initScrollReveal() {
    const elementsToReveal = [
        '.section-header',
        '.promo-grid',
        '.product-card',
        '.item',
        '.testimonial-card',
        '.about-container',
        '.login-container',
        '.contact-container',
        '.checkout-page',
        '.product-details',
        '.page-header',
        '.search-filter',
        '.stat'
    ];
    
    elementsToReveal.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            if (!el.classList.contains('reveal') && 
                !el.classList.contains('reveal-left') && 
                !el.classList.contains('reveal-right') && 
                !el.classList.contains('reveal-scale')) {
                el.classList.add('reveal');
            }
        });
    });
    
    const leftElements = document.querySelectorAll('.con, .stat');
    leftElements.forEach(el => {
        if (el.classList.contains('reveal')) {
            el.classList.remove('reveal');
            el.classList.add('reveal-left');
        }
    });
    
    const rightElements = document.querySelectorAll('.con3');
    rightElements.forEach(el => {
        if (el.classList.contains('reveal')) {
            el.classList.remove('reveal');
            el.classList.add('reveal-right');
        }
    });
    
    const scaleElements = document.querySelectorAll('.item, .product-card');
    scaleElements.forEach(el => {
        if (el.classList.contains('reveal')) {
            el.classList.remove('reveal');
            el.classList.add('reveal-scale');
        }
    });
    
    function checkReveal() {
        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', checkReveal);
    window.addEventListener('load', checkReveal);
    checkReveal();
}

if (!document.querySelector('#custom-animations')) {
    const style = document.createElement('style');
    style.id = 'custom-animations';
    style.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translateX(100px); }
            15% { opacity: 1; transform: translateX(0); }
            85% { opacity: 1; transform: translateX(0); }
            100% { opacity: 0; transform: translateX(100px); }
        }
    `;
    document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderProducts();
    renderBestsellers();
    renderProductsGrid();
    setupSearchFilter();
    loadProductDetails();
    initScrollReveal();
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });
});
