// Theme Management
const THEMES = {
    REGULAR: 'regular',
    LIGHT: 'light',
    DARK: 'dark'
};

function getCurrentTheme() {
    return document.body.getAttribute('data-theme') || THEMES.REGULAR;
}

function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    
    // Update toggle button icon
    const toggle = document.querySelector('#themeToggle .theme-icon');
    if (toggle) {
        const icons = {
            [THEMES.REGULAR]: '🌙',
            [THEMES.LIGHT]: '☀️',
            [THEMES.DARK]: '🌙'
        };
        toggle.textContent = icons[theme] || '🌙';
    }
}

function cycleTheme() {
    const current = getCurrentTheme();
    const cycle = {
        [THEMES.REGULAR]: THEMES.LIGHT,
        [THEMES.LIGHT]: THEMES.DARK,
        [THEMES.DARK]: THEMES.REGULAR
    };
    setTheme(cycle[current] || THEMES.REGULAR);
}

// Initialize theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    // Load saved theme
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme && Object.values(THEMES).includes(savedTheme)) {
        setTheme(savedTheme);
    } else {
        setTheme(THEMES.REGULAR);
    }
    
    // Mobile menu toggle - RESTORED
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('open');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-container')) {
                navLinks.classList.remove('open');
            }
        });
        
        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }
    
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', cycleTheme);
    }
    
    // Contact form handler - RESTORED
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! (Demo mode - In production, this would send an email)');
            contactForm.reset();
        });
    }
    
    // Smooth scroll for anchor links - RESTORED
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Glassmorphism effect on scroll - RESTORED
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const nav = document.querySelector('.glass-nav');
                if (window.scrollY > 50) {
                    nav.style.background = 'rgba(0, 0, 0, 0.8)';
                    nav.style.backdropFilter = 'blur(20px)';
                } else {
                    nav.style.background = '';
                    nav.style.backdropFilter = '';
                }
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Animate stats on view - RESTORED
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.stat-card, .project-card, .experience-item, .skill-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Floating animation - RESTORED
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach((card, index) => {
        card.style.animation = `floatCard ${2 + index * 0.2}s ease-in-out infinite`;
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Inject keyframe animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatCard {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
    }
`;
document.head.appendChild(style);