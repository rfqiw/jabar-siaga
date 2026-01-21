// Main JavaScript File - Portal WebGIS Kebencanaan Jawa Barat

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initLoadingScreen();
    initNavigation();
    initSmoothScroll();
    initCounterAnimation();
    initLazyLoading();
    initFullscreenMaps();
    initRippleButtons();
    
    // Show beta notice in console
    console.log('%c🌐 Portal WebGIS Kebencanaan Jawa Barat', 'color: #0066cc; font-size: 16px; font-weight: bold;');
    console.log('%cVersi Beta 1.0 | Dibangun dengan HTML/CSS/JS murni', 'color: #ff6600;');
    console.log('%c7 layer kebencanaan tersedia untuk analisis risiko', 'color: #2a9d8f;');
});

// Loading Screen Management
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Simulate minimum loading time for better UX
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        
        // Remove from DOM after animation completes
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 800);
    }, 1500);
}

// Navigation Initialization
function initNavigation() {
    const mobileToggle = document.querySelector('.nav-mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Active link management
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            // Update active class
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // If it's an anchor link, handle smooth scroll
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);
}

function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSectionId = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && 
            window.pageYOffset < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (href === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
}

// Smooth Scroll Initialization
function initSmoothScroll() {
    // Add smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll indicator animation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.visibility = 'hidden';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.visibility = 'visible';
            }
        });
    }
}

// Counter Animation for Summary Cards
function initCounterAnimation() {
    const counters = document.querySelectorAll('.card-counter');
    
    // Only animate when element is in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const step = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter); // Stop observing after animation
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Lazy Loading for 3D Map
function initLazyLoading() {
    const lazyIframes = document.querySelectorAll('.lazy-load');
    const loadButtons = document.querySelectorAll('.load-map-btn');
    
    // Load iframe when button is clicked
    loadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const container = this.closest('.lazy-load-placeholder');
            const iframe = container.previousElementSibling;
            
            if (iframe && iframe.dataset.src) {
                iframe.src = iframe.dataset.src;
                container.style.opacity = '0';
                
                setTimeout(() => {
                    container.style.display = 'none';
                }, 400);
            }
        });
    });
    
    // Load iframe when scrolled into view
    const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                
                if (iframe.dataset.src) {
                    // Small delay for better UX
                    setTimeout(() => {
                        iframe.src = iframe.dataset.src;
                        iframe.classList.remove('lazy-load');
                    }, 300);
                }
                
                lazyObserver.unobserve(iframe);
            }
        });
    }, { rootMargin: '100px' });
    
    lazyIframes.forEach(iframe => {
        lazyObserver.observe(iframe);
    });
}

// Fullscreen Map Functionality
function initFullscreenMaps() {
    const fullscreenButtons = document.querySelectorAll('.fullscreen-btn');
    
    fullscreenButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.dataset.target;
            const iframe = document.getElementById(targetId);
            
            if (iframe) {
                openFullscreenMap(iframe.src, iframe.title);
            }
        });
    });
    
    // Close fullscreen with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeFullscreenMap();
        }
    });
}

function openFullscreenMap(src, title) {
    // Create modal container
    const modal = document.createElement('div');
    modal.className = 'fullscreen-modal';
    modal.innerHTML = `
        <div class="fullscreen-header">
            <h3 style="margin: 0; color: white;">${title}</h3>
            <button class="fullscreen-close">
                <i class="fas fa-times"></i> Tutup Layar Penuh
            </button>
        </div>
        <div class="fullscreen-content">
            <iframe class="fullscreen-iframe" src="${src}" title="${title}"></iframe>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add active class for animation
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Close button functionality
    const closeBtn = modal.querySelector('.fullscreen-close');
    closeBtn.addEventListener('click', closeFullscreenMap);
}

function closeFullscreenMap() {
    const modal = document.querySelector('.fullscreen-modal');
    if (modal) {
        modal.classList.remove('active');
        
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Ripple Button Effect
function initRippleButtons() {
    const buttons = document.querySelectorAll('.glow-button, .outline-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Remove existing ripples
            const existingRipples = this.querySelectorAll('.button-ripple');
            existingRipples.forEach(ripple => ripple.remove());
            
            // Create new ripple
            const ripple = document.createElement('span');
            ripple.className = 'button-ripple';
            
            // Calculate ripple position
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Utility function for date formatting
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    
    return date.toLocaleDateString('id-ID', options);
}

// Utility function for number formatting
function formatNumber(num) {
    return new Intl.NumberFormat('id-ID').format(num);
}

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Initialize on window load
window.addEventListener('load', function() {
    // Update copyright year
    const yearElement = document.querySelector('footer p:first-child');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2026', currentYear);
    }
    
    // Check for console errors
    console.log('%c✅ Semua sistem berhasil dimuat', 'color: #2a9d8f; font-weight: bold;');
});
